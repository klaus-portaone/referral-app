<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Uninvoiced Payments Report</h2>
        <p class="text-sm text-gray-600 mt-1">All paid payments that haven't been invoiced yet</p>
      </div>
      <div class="flex items-center gap-4">
        <div class="bg-orange-100 px-4 py-2 rounded-lg">
          <span class="text-sm font-medium text-gray-600">Total Uninvoiced:</span>
          <span class="ml-2 text-xl font-bold text-orange-600">${{ totalUninvoiced.toFixed(2) }}</span>
        </div>
        <button
          v-if="uninvoicedPayments.length > 0"
          @click="markAllAsInvoiced"
          class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
        >
          <CheckCircle :size="18" />
          Mark All as Invoiced
        </button>
      </div>
    </div>

    <div v-if="loading" class="text-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      <p class="text-gray-600 mt-2">Loading uninvoiced payments...</p>
    </div>

    <div v-else-if="uninvoicedPayments.length === 0" class="text-center py-8">
      <FileCheck class="mx-auto text-gray-400 mb-4" :size="48" />
      <p class="text-gray-600">No uninvoiced payments found. All payments are up to date!</p>
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Month</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Payment Status</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="payment in uninvoicedPayments"
            :key="`${payment.customerId}-${payment.month}`"
            class="border-b border-gray-100 hover:bg-gray-50"
          >
            <td class="py-4 px-4">
              <div class="font-medium text-gray-900">{{ payment.customerName }}</div>
            </td>
            <td class="py-4 px-4">
              <div class="text-gray-700">{{ formatMonth(payment.month) }}</div>
            </td>
            <td class="py-4 px-4">
              <div class="text-green-600 font-semibold">${{ payment.amount.toFixed(2) }}</div>
            </td>
            <td class="py-4 px-4">
              <span class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Paid
              </span>
            </td>
            <td class="py-4 px-4">
              <button
                @click="markAsInvoiced(payment.customerId, payment.month)"
                class="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <CheckCircle :size="16" />
                Mark as Invoiced
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { FileCheck, CheckCircle } from 'lucide-vue-next'

const props = defineProps({
  referrals: {
    type: Array,
    required: true
  },
  payments: {
    type: Object,
    required: true
  },
  loading: Boolean
})

const emit = defineEmits(['updateInvoiceStatus', 'markAllAsInvoiced'])

const uninvoicedPayments = computed(() => {
  const payments = []

  // Iterate through all referrals and their payments
  props.referrals.forEach(referral => {
    const customerPayments = props.payments[referral.id] || []

    customerPayments.forEach(payment => {
      // Only include paid payments that haven't been invoiced and have a non-zero amount
      if (payment.status === 'paid' && !payment.isInvoiced && payment.amount > 0) {
        payments.push({
          customerId: referral.id,
          customerName: referral.customerName,
          month: payment.month,
          amount: payment.amount,
          status: payment.status
        })
      }
    })
  })

  // Sort by month (most recent first)
  return payments.sort((a, b) => b.month.localeCompare(a.month))
})

const totalUninvoiced = computed(() => {
  return uninvoicedPayments.value.reduce((sum, payment) => sum + payment.amount, 0)
})

const formatMonth = (monthKey) => {
  const [year, month] = monthKey.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const markAsInvoiced = (customerId, month) => {
  emit('updateInvoiceStatus', customerId, month, true)
}

const markAllAsInvoiced = () => {
  if (confirm(`Are you sure you want to mark all ${uninvoicedPayments.value.length} payments as invoiced?`)) {
    emit('markAllAsInvoiced', uninvoicedPayments.value)
  }
}
</script>
