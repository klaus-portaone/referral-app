<template>
  <div v-if="showAddPaymentForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Add Payment</h2>

      <form @submit.prevent="$emit('addPayment')" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Customer</label>
          <select
            :value="paymentFormData.customerId"
            @change="updatePaymentFormData('customerId', $event.target.value)"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select a customer</option>
            <option 
              v-for="referral in referrals" 
              :key="referral.id" 
              :value="referral.id"
            >
              {{ referral.customerName }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Month</label>
          <select
            :value="paymentFormData.month"
            @change="updatePaymentFormData('month', $event.target.value)"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select a month</option>
            <option 
              v-for="month in monthsArray" 
              :key="month.key" 
              :value="month.key"
            >
              {{ month.name }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Amount ($)</label>
          <input
            :value="paymentFormData.amount"
            @input="updatePaymentFormData('amount', $event.target.value)"
            type="number"
            step="0.01"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter payment amount"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
          <select
            :value="paymentFormData.paymentStatus"
            @change="updatePaymentFormData('paymentStatus', $event.target.value)"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>

        <div class="flex items-center">
          <input
            :checked="paymentFormData.invoiceStatus"
            @change="updatePaymentFormData('invoiceStatus', $event.target.checked)"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label class="ml-2 text-sm font-medium text-gray-700">Already invoiced</label>
        </div>

        <div class="flex gap-4 pt-4">
          <button
            type="button"
            @click="$emit('resetForm')"
            class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50"
          >
            {{ loading ? 'Adding...' : 'Add Payment' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showAddPaymentForm: Boolean,
  paymentFormData: {
    type: Object,
    required: true
  },
  referrals: {
    type: Array,
    required: true
  },
  monthsArray: {
    type: Array,
    required: true
  },
  loading: Boolean
})

const emit = defineEmits(['addPayment', 'resetForm', 'update:paymentFormData'])

const updatePaymentFormData = (field, value) => {
  emit('update:paymentFormData', { ...props.paymentFormData, [field]: value })
}
</script>