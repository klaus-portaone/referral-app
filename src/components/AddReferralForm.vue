<template>
  <div v-if="showAddForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        {{ editingReferral ? 'Edit Referral' : 'Add New Referral' }}
      </h2>

      <form @submit.prevent="$emit('submit')" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
          <input
            :value="formData.customerName"
            @input="updateFormData('customerName', $event.target.value)"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter customer name"
            required
          />
        </div>

        <div v-if="formData.status !== 'In pipeline'">
          <label class="block text-sm font-medium text-gray-700 mb-2">Monthly Value ($)</label>
          <input
            :value="formData.monthlyValue"
            @input="updateFormData('monthlyValue', $event.target.value)"
            type="number"
            step="0.01"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter monthly value"
            :required="formData.status !== 'In pipeline'"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select
            :value="formData.status"
            @change="updateFormData('status', $event.target.value)"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="In pipeline">In pipeline</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div v-if="formData.status !== 'In pipeline'">
          <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
          <input
            :value="formData.startDate"
            @input="updateFormData('startDate', $event.target.value)"
            type="date"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :required="formData.status !== 'In pipeline'"
          />
        </div>

        <div v-if="formData.status !== 'Active'">
          <label class="block text-sm font-medium text-gray-700 mb-2">End Date</label>
          <input
            :value="formData.endDate"
            @input="updateFormData('endDate', $event.target.value)"
            type="date"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :min="formData.startDate"
          />
          <p class="text-sm text-gray-500 mt-1">Leave empty if no specific end date</p>
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
            class="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50"
          >
            {{ loading ? 'Saving...' : (editingReferral ? 'Update' : 'Add') }} Referral
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showAddForm: Boolean,
  editingReferral: Object,
  formData: {
    type: Object,
    required: true
  },
  loading: Boolean
})

const emit = defineEmits(['submit', 'resetForm', 'update:formData'])

const updateFormData = (field, value) => {
  emit('update:formData', { ...props.formData, [field]: value })
}
</script>