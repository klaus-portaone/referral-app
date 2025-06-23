<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex items-center">
        <div class="p-2 bg-blue-100 rounded-lg">
          <DollarSign class="text-blue-600" :size="24" />
        </div>
        <div class="ml-4">
          <p class="text-sm font-medium text-gray-600">Total Monthly Value</p>
          <p class="text-2xl font-bold text-gray-900">${{ totalMonthlyValue.toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex items-center">
        <div class="p-2 bg-green-100 rounded-lg">
          <Users class="text-green-600" :size="24" />
        </div>
        <div class="ml-4">
          <p class="text-sm font-medium text-gray-600">Active Referrals</p>
          <p class="text-2xl font-bold text-gray-900">{{ activeReferrals }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex items-center">
        <div class="p-2 bg-yellow-100 rounded-lg">
          <TrendingUp class="text-yellow-600" :size="24" />
        </div>
        <div class="ml-4">
          <p class="text-sm font-medium text-gray-600">This Month Expected</p>
          <p class="text-2xl font-bold text-gray-900">${{ paymentStats.totalExpected.toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex items-center">
        <div class="p-2 bg-purple-100 rounded-lg">
          <CheckCircle class="text-purple-600" :size="24" />
        </div>
        <div class="ml-4">
          <p class="text-sm font-medium text-gray-600">This Month Received</p>
          <p class="text-2xl font-bold text-gray-900">${{ paymentStats.totalReceived.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Invoicing Status</h3>
        <FileText class="text-gray-400" :size="20" />
      </div>
      <div class="space-y-3">
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Total Invoiced</span>
          <span class="font-semibold text-green-600">${{ paymentStats.totalInvoiced.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">To Be Invoiced</span>
          <span class="font-semibold text-orange-600">${{ paymentStats.totalToBeInvoiced.toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Payment Status</h3>
        <CreditCard class="text-gray-400" :size="20" />
      </div>
      <div class="space-y-3">
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Pending</span>
          <span class="font-semibold text-red-600">${{ paymentStats.totalPending.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Received</span>
          <span class="font-semibold text-green-600">${{ paymentStats.totalReceived.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DollarSign, Users, TrendingUp, CheckCircle, FileText, CreditCard } from 'lucide-vue-next'

defineProps({
  totalMonthlyValue: {
    type: Number,
    required: true
  },
  activeReferrals: {
    type: Number,
    required: true
  },
  paymentStats: {
    type: Object,
    required: true
  }
})
</script>