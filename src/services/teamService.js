import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  where, 
  onSnapshot,
  getDoc,
  writeBatch,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { db, auth } from '@/firebase';

// ========================
// TEAM OPERATIONS
// ========================

/**
 * Create a new team
 */
export const createTeam = async (teamName) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const teamData = {
      name: teamName,
      owner: user.uid,
      members: [user.uid],
      memberEmails: [user.email],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'teams'), teamData);
    console.log('Team created with ID:', docRef.id);
    return { id: docRef.id, ...teamData };
  } catch (error) {
    console.error('Error creating team:', error);
    throw new Error('Failed to create team: ' + error.message);
  }
};

/**
 * Get user's teams
 */
export const getUserTeams = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const q = query(
      collection(db, 'teams'),
      where('members', 'array-contains', user.uid)
    );
    
    const querySnapshot = await getDocs(q);
    const teams = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log('User teams loaded:', teams.length);
    return teams;
  } catch (error) {
    console.error('Error getting user teams:', error);
    throw new Error('Failed to load teams: ' + error.message);
  }
};

/**
 * Subscribe to user's teams
 */
export const subscribeToUserTeams = (callback) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      callback([]);
      return () => {};
    }

    const q = query(
      collection(db, 'teams'),
      where('members', 'array-contains', user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const teams = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      console.log('Real-time teams update:', teams.length);
      callback(teams);
    }, (error) => {
      console.error('Error in teams subscription:', error);
      callback([]);
    });

    return unsubscribe;
  } catch (error) {
    console.error('Error setting up teams subscription:', error);
    return () => {};
  }
};

// ========================
// INVITATION OPERATIONS
// ========================

/**
 * Send invitation to join team
 */
export const inviteToTeam = async (teamId, inviteEmail) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    // Check if user is team owner or member
    const teamDoc = await getDoc(doc(db, 'teams', teamId));
    if (!teamDoc.exists()) throw new Error('Team not found');
    
    const teamData = teamDoc.data();
    if (!teamData.members.includes(user.uid)) {
      throw new Error('You are not a member of this team');
    }

    // Check if user is already invited or is a member
    if (teamData.memberEmails.includes(inviteEmail)) {
      throw new Error('User is already a team member');
    }

    const invitationData = {
      teamId: teamId,
      teamName: teamData.name,
      inviterEmail: user.email,
      inviterUid: user.uid,
      inviteEmail: inviteEmail,
      status: 'pending',
      createdAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'invitations'), invitationData);
    console.log('Invitation sent with ID:', docRef.id);
    return { id: docRef.id, ...invitationData };
  } catch (error) {
    console.error('Error sending invitation:', error);
    throw new Error('Failed to send invitation: ' + error.message);
  }
};

/**
 * Get pending invitations for current user
 */
export const getPendingInvitations = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const q = query(
      collection(db, 'invitations'),
      where('inviteEmail', '==', user.email),
      where('status', '==', 'pending')
    );
    
    const querySnapshot = await getDocs(q);
    const invitations = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log('Pending invitations loaded:', invitations.length);
    return invitations;
  } catch (error) {
    console.error('Error getting pending invitations:', error);
    throw new Error('Failed to load invitations: ' + error.message);
  }
};

/**
 * Accept team invitation
 */
export const acceptInvitation = async (invitationId) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const batch = writeBatch(db);

    // Get invitation details
    const invitationDoc = await getDoc(doc(db, 'invitations', invitationId));
    if (!invitationDoc.exists()) throw new Error('Invitation not found');
    
    const invitationData = invitationDoc.data();
    if (invitationData.inviteEmail !== user.email) {
      throw new Error('This invitation is not for you');
    }

    // Add user to team
    const teamRef = doc(db, 'teams', invitationData.teamId);
    batch.update(teamRef, {
      members: arrayUnion(user.uid),
      memberEmails: arrayUnion(user.email),
      updatedAt: new Date()
    });

    // Mark invitation as accepted
    const invitationRef = doc(db, 'invitations', invitationId);
    batch.update(invitationRef, {
      status: 'accepted',
      acceptedAt: new Date()
    });

    await batch.commit();
    console.log('Invitation accepted successfully');
    
    // Emit custom event to trigger data refresh
    window.dispatchEvent(new CustomEvent('teamMembershipChanged', { 
      detail: { type: 'accepted', teamId: invitationData.teamId } 
    }));
    
    return true;
  } catch (error) {
    console.error('Error accepting invitation:', error);
    throw new Error('Failed to accept invitation: ' + error.message);
  }
};

/**
 * Decline team invitation
 */
export const declineInvitation = async (invitationId) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const invitationRef = doc(db, 'invitations', invitationId);
    await updateDoc(invitationRef, {
      status: 'declined',
      declinedAt: new Date()
    });

    console.log('Invitation declined');
    return true;
  } catch (error) {
    console.error('Error declining invitation:', error);
    throw new Error('Failed to decline invitation: ' + error.message);
  }
};

/**
 * Remove member from team
 */
export const removeMemberFromTeam = async (teamId, memberUid, memberEmail) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    // Check if user is team owner
    const teamDoc = await getDoc(doc(db, 'teams', teamId));
    if (!teamDoc.exists()) throw new Error('Team not found');
    
    const teamData = teamDoc.data();
    if (teamData.owner !== user.uid) {
      throw new Error('Only team owner can remove members');
    }

    if (memberUid === user.uid) {
      throw new Error('Cannot remove yourself from the team');
    }

    const teamRef = doc(db, 'teams', teamId);
    await updateDoc(teamRef, {
      members: arrayRemove(memberUid),
      memberEmails: arrayRemove(memberEmail),
      updatedAt: new Date()
    });

    console.log('Member removed from team');
    return true;
  } catch (error) {
    console.error('Error removing member:', error);
    throw new Error('Failed to remove member: ' + error.message);
  }
};

export default {
  createTeam,
  getUserTeams,
  subscribeToUserTeams,
  inviteToTeam,
  getPendingInvitations,
  acceptInvitation,
  declineInvitation,
  removeMemberFromTeam
};