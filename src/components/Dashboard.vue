<template>
  <div>
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <span class="text-gray-600">Welcome,</span>
            <span class="font-medium text-gray-900">{{ currentUser?.email }}</span>
          </div>
          <button
            @click="handleLogout"
            class="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut :size="18" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
    <div class="p-8">
      <ReferralManagementApp />
    </div>
  </div>
</template>

<script setup>
import { LogOut } from 'lucide-vue-next'
import { useAuth } from '@/composables/useAuth'
import ReferralManagementApp from './ReferralManagementApp.vue'

const { currentUser, logout } = useAuth()

const handleLogout = async () => {
  try {
    await logout()
  } catch (error) {
    console.error('Failed to log out:', error)
  }
}
</script>