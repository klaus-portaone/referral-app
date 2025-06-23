<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Referrals</h2>
      <button
        @click="$emit('showAddReferralForm')"
        class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
        :disabled="loading"
      >
        <Plus :size="18" />
        Add Referral
      </button>
    </div>

    <div v-if="loading && referrals.length === 0" class="text-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      <p class="text-gray-600 mt-2">Loading referrals...</p>
    </div>

    <div v-else-if="referrals.length === 0" class="text-center py-8">
      <Users class="mx-auto text-gray-400 mb-4" :size="48" />
      <p class="text-gray-600">No referrals found. Add your first referral to get started!</p>
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Monthly Value</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Start Date</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">End Date</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="referral in referrals" 
            :key="referral.id"
            class="border-b border-gray-100 hover:bg-gray-50"
          >
            <td class="py-4 px-4">
              <div class="font-medium text-gray-900">{{ referral.customerName }}</div>
            </td>
            <td class="py-4 px-4">
              <div class="text-green-600 font-semibold">
                {{ referral.status === 'In pipeline' ? 'TBD' : `$${referral.monthlyValue.toFixed(2)}` }}
              </div>
            </td>
            <td class="py-4 px-4">
              <span 
                :class="[
                  'px-2 py-1 rounded-full text-xs font-medium',
                  referral.status === 'Active' ? 'bg-green-100 text-green-800' :
                  referral.status === 'In pipeline' ? 'bg-blue-100 text-blue-800' :
                  referral.status === 'Inactive' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                ]"
              >
                {{ referral.status }}
              </span>
            </td>
            <td class="py-4 px-4">
              <div class="text-gray-600">
                {{ referral.startDate ? formatDate(referral.startDate) : 'TBD' }}
              </div>
            </td>
            <td class="py-4 px-4">
              <div class="text-gray-600">
                {{ referral.endDate ? formatDate(referral.endDate) : '-' }}
              </div>
            </td>
            <td class="py-4 px-4">
              <div class="flex gap-2">
                <button
                  @click="$emit('edit', referral)"
                  class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Edit referral"
                >
                  <Edit :size="16" />
                </button>
                <button
                  @click="handleDelete(referral)"
                  class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete referral"
                >
                  <Trash2 :size="16" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { Plus, Users, Edit, Trash2 } from 'lucide-vue-next'

defineProps({
  referrals: {
    type: Array,
    required: true
  },
  loading: Boolean
})

const emit = defineEmits(['edit', 'delete', 'showAddReferralForm'])

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const handleDelete = (referral) => {
  if (confirm(`Are you sure you want to delete the referral for ${referral.customerName}? This will also delete all related payments.`)) {
    emit('delete', referral.id)
  }
}
</script>