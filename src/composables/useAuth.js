import { ref, onMounted } from 'vue'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth'
import { auth } from '@/firebase'

const currentUser = ref(null)
const loading = ref(true)

export function useAuth() {
  const signup = async (email, password) => {
    try {
      console.log('Attempting signup with:', email)
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log('Signup successful:', result.user.email)
      return result
    } catch (error) {
      console.error('Signup error:', error.code, error.message)
      throw error
    }
  }

  const login = async (email, password) => {
    try {
      console.log('Attempting login with:', email)
      const result = await signInWithEmailAndPassword(auth, email, password)
      console.log('Login successful:', result.user.email)
      return result
    } catch (error) {
      console.error('Login error:', error.code, error.message)
      throw error
    }
  }

  const logout = async () => {
    return signOut(auth)
  }

  const initAuth = () => {
    onAuthStateChanged(auth, (user) => {
      currentUser.value = user
      loading.value = false
    })
  }

  onMounted(() => {
    if (!currentUser.value) {
      initAuth()
    }
  })

  return {
    currentUser,
    loading,
    signup,
    login,
    logout,
    initAuth
  }
}