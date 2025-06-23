<template>
  <div class="bg-white rounded-2xl shadow-xl p-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Payment Tracking</h2>
      <select
        :value="selectedMonth"
        @change="$emit('update:selectedMonth', $event.target.value)"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option 
          v-for="month in monthsArray" 
          :key="month.key" 
          :value="month.key"
        >
          {{ month.name }}
        </option>
      </select>
    </div>

    <div v-if="loading && referrals.length === 0" class="text-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      <p class="text-gray-600 mt-2">Loading payments...</p>
    </div>

    <div v-else-if="activeReferrals.length === 0" class="text-center py-8">
      <CreditCard class="mx-auto text-gray-400 mb-4" :size="48" />
      <p class="text-gray-600">No active referrals found for payment tracking.</p>
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Referral Status</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Expected</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Actual Amount</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Payment Status</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Invoiced</th>
            <th class="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="referral in activeReferrals" 
            :key="referral.id"
            class="border-b border-gray-100 hover:bg-gray-50"
          >
            <td class="py-4 px-4">
              <div class="font-medium text-gray-900">{{ referral.customerName }}</div>
            </td>
            <td class="py-4 px-4">
              <span 
                :class="[
                  'px-2 py-1 rounded-full text-xs font-medium',
                  referral.status === 'Active' ? 'bg-green-100 text-green-800' :
                  referral.status === 'Inactive' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                ]"
              >
                {{ referral.status }}
              </span>
            </td>
            <td class="py-4 px-4">
              <div class="text-green-600 font-semibold">${{ referral.monthlyValue.toFixed(2) }}</div>
            </td>
            <td class="py-4 px-4">
              <div class="text-gray-900 font-medium">
                {{ getPaymentAmount(referral.id, selectedMonth) ? 
                   `$${getPaymentAmount(referral.id, selectedMonth).toFixed(2)}` : 
                   '-' 
                }}
              </div>
            </td>
            <td class="py-4 px-4">
              <select
                :value="getPaymentStatus(referral.id, selectedMonth)"
                @change="updatePaymentStatus(referral.id, selectedMonth, $event.target.value)"
                :class="[
                  'px-3 py-1 rounded-lg text-sm font-medium border-0',
                  getPaymentStatus(referral.id, selectedMonth) === 'paid' ? 'bg-green-100 text-green-800' :
                  getPaymentStatus(referral.id, selectedMonth) === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                ]"
                :disabled="!isPaymentValidForMonth(referral, selectedMonth) && !hasPayment(referral.id, selectedMonth)"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </td>
            <td class="py-4 px-4">
              <button
                @click="toggleInvoiceStatus(referral.id, selectedMonth)"
                :class="[
                  'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
                  getInvoiceStatus(referral.id, selectedMonth) 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
                :disabled="getPaymentStatus(referral.id, selectedMonth) !== 'paid'"
              >
                {{ getInvoiceStatus(referral.id, selectedMonth) ? 'Invoiced' : 'Not Invoiced' }}
              </button>
            </td>
            <td class="py-4 px-4">
              <button
                v-if="hasPayment(referral.id, selectedMonth)"
                @click="handleDeletePayment(referral.id, selectedMonth)"
                class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete payment"
              >
                <Trash2 :size="16" />
              </button>
              <span v-else class="text-gray-400 text-sm">No payment</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-6 text-sm text-gray-600">
      <p>* Only months after the referral start date are available for payment tracking</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CreditCard, Trash2 } from 'lucide-vue-next'

const props = defineProps({
  referrals: {
    type: Array,
    required: true
  },
  payments: {
    type: Object,
    required: true
  },
  selectedMonth: {
    type: String,
    required: true
  },
  monthsArray: {
    type: Array,
    required: true
  },
  getPaymentStatus: {
    type: Function,
    required: true
  },
  getInvoiceStatus: {
    type: Function,
    required: true
  },
  getPaymentAmount: {
    type: Function,
    required: true
  },
  isPaymentValidForMonth: {
    type: Function,
    required: true
  },
  loading: Boolean
})

const emit = defineEmits([
  'update:selectedMonth',
  'updatePaymentStatus',
  'updateInvoiceStatus',
  'deletePayment'
])

const activeReferrals = computed(() => {
  // Get all referrals that should show payments for the selected month
  const referralsWithPayments = props.referrals.filter(ref => {
    // Always include if the month is valid for this referral (regardless of current status)
    const isValidMonth = props.isPaymentValidForMonth(ref, props.selectedMonth);
    
    // Also check if there's actually a payment for this month
    const hasPaymentForMonth = props.getPaymentAmount(ref.id, props.selectedMonth) !== null;
    
    // Show if: valid month OR has a payment for this month
    return isValidMonth || hasPaymentForMonth;
  });
  
  return referralsWithPayments;
})

const updatePaymentStatus = (customerId, month, status) => {
  emit('updatePaymentStatus', customerId, month, status)
}

const toggleInvoiceStatus = (customerId, month) => {
  const currentStatus = props.getInvoiceStatus(customerId, month)
  emit('updateInvoiceStatus', customerId, month, !currentStatus)
}

const hasPayment = (customerId, month) => {
  const customerPayments = props.payments[customerId] || []
  return customerPayments.some(p => p.month === month)
}

const handleDeletePayment = (customerId, month) => {
  if (confirm('Are you sure you want to delete this payment record?')) {
    emit('deletePayment', customerId, month)
  }
}
</script>