<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Team Management</h2>
      <div class="flex gap-3">
        <button
          v-if="pendingInvitations.length > 0"
          @click="showInvitations = true"
          class="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-600 transition-colors"
        >
          <Mail :size="18" />
          {{ pendingInvitations.length }} Invitation{{ pendingInvitations.length > 1 ? 's' : '' }}
        </button>
        <button
          @click="showInviteForm = true"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <UserPlus :size="18" />
          Invite Partner
        </button>
      </div>
    </div>

    <!-- Teams List -->
    <div v-if="teams.length > 0" class="space-y-4">
      <div 
        v-for="team in teams" 
        :key="team.id"
        class="border border-gray-200 rounded-lg p-4"
      >
        <div class="flex justify-between items-start mb-3">
          <div>
            <h3 class="font-semibold text-lg">{{ team.name }}</h3>
            <p class="text-sm text-gray-600">
              {{ team.members.length }} member{{ team.members.length > 1 ? 's' : '' }}
            </p>
          </div>
          <span 
            v-if="team.owner === currentUser?.uid"
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
          >
            Owner
          </span>
        </div>
        
        <!-- Team Members -->
        <div class="space-y-2">
          <div 
            v-for="(email, index) in team.memberEmails" 
            :key="email"
            class="flex justify-between items-center bg-gray-50 rounded p-2"
          >
            <div class="flex items-center gap-2">
              <User :size="16" class="text-gray-400" />
              <span class="text-sm">{{ email }}</span>
              <span 
                v-if="team.members[index] === team.owner"
                class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
              >
                Owner
              </span>
              <span 
                v-if="email === currentUser?.email"
                class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                You
              </span>
            </div>
            <button
              v-if="team.owner === currentUser?.uid && team.members[index] !== currentUser?.uid"
              @click="removeMember(team.id, team.members[index], email)"
              class="text-red-600 hover:text-red-800 p-1"
              title="Remove member"
            >
              <UserMinus :size="16" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- No Teams Message -->
    <div v-else-if="!loading" class="text-center py-8">
      <Users class="mx-auto text-gray-400 mb-4" :size="48" />
      <p class="text-gray-600 mb-4">No teams yet. Create one or wait for an invitation!</p>
      <button
        @click="showCreateTeam = true"
        class="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
      >
        Create Team
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      <p class="text-gray-600 mt-2">Loading teams...</p>
    </div>

    <!-- Create Team Modal -->
    <div v-if="showCreateTeam" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 class="text-xl font-bold mb-4">Create New Team</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Team Name</label>
            <input
              v-model="newTeamName"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter team name"
            />
          </div>
          <div class="flex gap-3">
            <button
              @click="showCreateTeam = false; newTeamName = ''"
              class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              @click="handleCreateTeam"
              :disabled="!newTeamName.trim()"
              class="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Invite Form Modal -->
    <div v-if="showInviteForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 class="text-xl font-bold mb-4">Invite Business Partner</h3>
        <div class="space-y-4">
          <div v-if="teams.length > 1">
            <label class="block text-sm font-medium text-gray-700 mb-2">Select Team</label>
            <select
              v-model="selectedTeamId"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a team</option>
              <option v-for="team in teams" :key="team.id" :value="team.id">
                {{ team.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Partner's Email</label>
            <input
              v-model="inviteEmail"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="partner@example.com"
            />
          </div>
          <div class="flex gap-3">
            <button
              @click="showInviteForm = false; resetInviteForm()"
              class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              @click="handleInvite"
              :disabled="!inviteEmail.trim() || (teams.length > 1 && !selectedTeamId)"
              class="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pending Invitations Modal -->
    <div v-if="showInvitations" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 class="text-xl font-bold mb-4">Pending Invitations</h3>
        <div class="space-y-3">
          <div 
            v-for="invitation in pendingInvitations" 
            :key="invitation.id"
            class="border border-gray-200 rounded-lg p-3"
          >
            <div class="mb-2">
              <h4 class="font-medium">{{ invitation.teamName }}</h4>
              <p class="text-sm text-gray-600">From: {{ invitation.inviterEmail }}</p>
            </div>
            <div class="flex gap-2">
              <button
                @click="handleAcceptInvitation(invitation.id)"
                class="flex-1 bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              >
                Accept
              </button>
              <button
                @click="handleDeclineInvitation(invitation.id)"
                class="flex-1 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
        <button
          @click="showInvitations = false"
          class="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Users, User, UserPlus, UserMinus, Mail } from 'lucide-vue-next'
import { useAuth } from '@/composables/useAuth'
import { 
  createTeam, 
  subscribeToUserTeams, 
  inviteToTeam, 
  getPendingInvitations,
  acceptInvitation,
  declineInvitation,
  removeMemberFromTeam
} from '@/services/teamService'

const { currentUser } = useAuth()

// State
const teams = ref([])
const pendingInvitations = ref([])
const loading = ref(true)
const showCreateTeam = ref(false)
const showInviteForm = ref(false)
const showInvitations = ref(false)
const newTeamName = ref('')
const inviteEmail = ref('')
const selectedTeamId = ref('')

const emit = defineEmits(['message'])

let unsubscribeTeams = null

// Load data
onMounted(async () => {
  try {
    // Subscribe to teams
    unsubscribeTeams = subscribeToUserTeams((teamsData) => {
      teams.value = teamsData
      loading.value = false
      
      // Auto-select team if only one exists
      if (teamsData.length === 1) {
        selectedTeamId.value = teamsData[0].id
      }
    })

    // Load pending invitations
    const invitations = await getPendingInvitations()
    pendingInvitations.value = invitations
  } catch (error) {
    console.error('Error loading team data:', error)
    emit('message', { type: 'error', text: 'Failed to load team data' })
    loading.value = false
  }
})

// Methods
const handleCreateTeam = async () => {
  try {
    await createTeam(newTeamName.value.trim())
    emit('message', { type: 'success', text: 'Team created successfully!' })
    showCreateTeam.value = false
    newTeamName.value = ''
  } catch (error) {
    console.error('Error creating team:', error)
    emit('message', { type: 'error', text: error.message })
  }
}

const handleInvite = async () => {
  try {
    const teamId = selectedTeamId.value || teams.value[0]?.id
    if (!teamId) {
      emit('message', { type: 'error', text: 'No team selected' })
      return
    }

    await inviteToTeam(teamId, inviteEmail.value.trim())
    emit('message', { type: 'success', text: 'Invitation sent successfully!' })
    resetInviteForm()
    showInviteForm.value = false
  } catch (error) {
    console.error('Error sending invitation:', error)
    emit('message', { type: 'error', text: error.message })
  }
}

const handleAcceptInvitation = async (invitationId) => {
  try {
    await acceptInvitation(invitationId)
    emit('message', { type: 'success', text: 'Invitation accepted!' })
    
    // Remove from pending list
    pendingInvitations.value = pendingInvitations.value.filter(inv => inv.id !== invitationId)
    
    // Close modal if no more invitations
    if (pendingInvitations.value.length === 0) {
      showInvitations.value = false
    }
  } catch (error) {
    console.error('Error accepting invitation:', error)
    emit('message', { type: 'error', text: error.message })
  }
}

const handleDeclineInvitation = async (invitationId) => {
  try {
    await declineInvitation(invitationId)
    emit('message', { type: 'success', text: 'Invitation declined' })
    
    // Remove from pending list
    pendingInvitations.value = pendingInvitations.value.filter(inv => inv.id !== invitationId)
    
    // Close modal if no more invitations
    if (pendingInvitations.value.length === 0) {
      showInvitations.value = false
    }
  } catch (error) {
    console.error('Error declining invitation:', error)
    emit('message', { type: 'error', text: error.message })
  }
}

const removeMember = async (teamId, memberUid, memberEmail) => {
  if (!confirm(`Remove ${memberEmail} from the team?`)) return
  
  try {
    await removeMemberFromTeam(teamId, memberUid, memberEmail)
    emit('message', { type: 'success', text: 'Member removed successfully' })
  } catch (error) {
    console.error('Error removing member:', error)
    emit('message', { type: 'error', text: error.message })
  }
}

const resetInviteForm = () => {
  inviteEmail.value = ''
  if (teams.value.length > 1) {
    selectedTeamId.value = ''
  }
}

// Cleanup
import { onUnmounted } from 'vue'
onUnmounted(() => {
  if (unsubscribeTeams) unsubscribeTeams()
})
</script>