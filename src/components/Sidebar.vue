<template>
  <div class="w-64 bg-white shadow-xl h-screen sticky top-0 flex flex-col">
    <!-- Logo/Header -->
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center gap-3">
        <img src="/referral_logo.svg" alt="Logo" class="h-12 w-12" />
        <div>
          <h1 class="text-xl font-bold text-gray-900">Partner</h1>
          <p class="text-xs text-gray-600">Management</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4 space-y-2">
      <button
        v-for="item in menuItems"
        :key="item.id"
        @click="$emit('navigate', item.id)"
        :class="[
          'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
          activeView === item.id
            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
            : 'text-gray-700 hover:bg-gray-100'
        ]"
      >
        <component :is="item.icon" :size="20" />
        <span class="font-medium">{{ item.label }}</span>
      </button>
    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-gray-200">
      <div class="text-xs text-gray-500 text-center">
        Partner Management v1.0
      </div>
    </div>
  </div>
</template>

<script setup>
import { LayoutDashboard, Users, CreditCard, UserCog } from 'lucide-vue-next'

defineProps({
  activeView: {
    type: String,
    required: true
  }
})

defineEmits(['navigate'])

const menuItems = [
  {
    id: 'overview',
    label: 'Overview',
    icon: LayoutDashboard
  },
  {
    id: 'partners',
    label: 'Partners',
    icon: Users
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: CreditCard
  },
  {
    id: 'team',
    label: 'Team',
    icon: UserCog
  }
]
</script>
