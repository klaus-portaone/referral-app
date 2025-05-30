import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "referral-app-c8e00.firebaseapp.com",
  projectId: "referral-app-c8e00",
  storageBucket: "referral-app-c8e00.firebasestorage.app",
  messagingSenderId: "343436249776",
  appId: "1:343436249776:web:d5607bd9bc9bc2214b0975"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
