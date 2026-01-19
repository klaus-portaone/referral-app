<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-6">
            <img src="/referral_logo.svg" alt="Referral Management Logo" class="h-36 w-36" />
            <div>
              <h1 class="text-4xl font-bold text-gray-900 mb-2">Partner Management</h1>
              <p class="text-gray-600">Firebase-powered partner management with real-time sync</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Management -->
      <TeamManagement @message="handleTeamMessage" />

      <!-- Stats Cards -->
      <StatsCards 
        :totalMonthlyValue="totalMonthlyValue"
        :activeReferrals="activeReferrals"
        :paymentStats="paymentStats"
      />

      <!-- Success/Error Messages -->
      <MessageBanner 
        :message="showSuccessMessage" 
        type="success" 
        @close="showSuccessMessage = ''" 
      />
      <MessageBanner 
        :message="showErrorMessage" 
        type="error" 
        @close="showErrorMessage = ''" 
      />

      <!-- Add Payment Form -->
      <AddPaymentForm
        :showAddPaymentForm="showAddPaymentForm"
        :paymentFormData="paymentFormData"
        @update:paymentFormData="updatePaymentFormData"
        @addPayment="handleAddPayment"
        @resetForm="resetPaymentForm"
        :referrals="referrals"
        :monthsArray="generateMonthsArray()"
        :loading="loading"
      />

      <!-- Add/Edit Referral Form -->
      <AddReferralForm
        :showAddForm="showAddForm"
        :editingReferral="editingReferral"
        :formData="formData"
        @update:formData="Object.assign(formData, $event)"
        @submit="handleSubmit"
        @resetForm="resetForm"
        :loading="loading"
      />

      <!-- Uninvoiced Payments Report -->
      <UninvoicedPaymentsReport
        :referrals="referrals"
        :payments="payments"
        @updateInvoiceStatus="handleUpdateInvoiceStatus"
        :loading="loading"
      />

      <!-- Main Content - Referrals List -->
      <ReferralsList
        :referrals="referrals"
        @edit="handleEdit"
        @delete="handleDelete"
        @showAddReferralForm="showAddForm = true"
        :loading="loading"
      />

      <!-- Payment Tracking Section -->
      <PaymentTracking
        :referrals="referrals"
        :payments="payments"
        :selectedMonth="selectedMonth"
        @update:selectedMonth="selectedMonth = $event"
        :monthsArray="generateMonthsArray()"
        :getPaymentStatus="getPaymentStatus"
        :getInvoiceStatus="getInvoiceStatus"
        :getPaymentAmount="getPaymentAmount"
        :isPaymentValidForMonth="isPaymentValidForMonth"
        @updatePaymentStatus="handleUpdatePaymentStatus"
        @updateInvoiceStatus="handleUpdateInvoiceStatus"
        @deletePayment="handleDeletePayment"
        @showAddPaymentForm="showAddPaymentForm = true"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { PlusCircle } from 'lucide-vue-next'
import { 
  addReferral, 
  addPayment, 
  subscribeToReferrals, 
  subscribeToPayments,
  updatePaymentStatus,
  updateInvoiceStatus,
  deletePayment,
  deleteReferral,
  updateReferral
} from '@/services/database'

import StatsCards from './StatsCards.vue'
import AddReferralForm from './AddReferralForm.vue'
import AddPaymentForm from './AddPaymentForm.vue'
import ReferralsList from './ReferralsList.vue'
import PaymentTracking from './PaymentTracking.vue'
import MessageBanner from './MessageBanner.vue'
import TeamManagement from './TeamManagement.vue'
import UninvoicedPaymentsReport from './UninvoicedPaymentsReport.vue'
import { useAuth } from '@/composables/useAuth'

const { currentUser } = useAuth()

// Application state
const referrals = ref([])
const payments = ref({})
const showAddForm = ref(false)
const showAddPaymentForm = ref(false)
const editingReferral = ref(null)
const selectedMonth = ref((() => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
})())

const formData = reactive({
  customerName: '',
  monthlyValue: '',
  status: 'In pipeline',
  startDate: '',
  endDate: ''
})

const paymentFormData = reactive({
  customerId: '',
  month: '',
  amount: '',
  paymentStatus: 'paid',
  invoiceStatus: false
})

const showSuccessMessage = ref('')
const showErrorMessage = ref('')
const loading = ref(true)

let unsubscribeReferrals = null
let unsubscribePayments = null

// Initialize Firebase subscriptions when user is authenticated
const initializeSubscriptions = async () => {
  console.log('Initializing subscriptions for user:', currentUser.value?.uid)
  
  unsubscribeReferrals = await subscribeToReferrals((referralsData) => {
    console.log('Received referrals data:', referralsData)
    referrals.value = referralsData
    loading.value = false
  })

  unsubscribePayments = await subscribeToPayments((paymentsData) => {
    payments.value = paymentsData
  })
}

// Handle team membership changes
const handleTeamMembershipChange = () => {
  console.log('Team membership changed, refreshing data subscriptions...')
  
  // Clean up existing subscriptions
  if (unsubscribeReferrals) {
    unsubscribeReferrals()
    unsubscribeReferrals = null
  }
  if (unsubscribePayments) {
    unsubscribePayments()
    unsubscribePayments = null
  }
  
  // Reinitialize subscriptions with updated team data
  if (currentUser.value) {
    initializeSubscriptions()
  }
}

// Watch for authentication changes
watch(currentUser, (newUser) => {
  console.log('User changed:', newUser?.uid || 'No user')
  
  // Clean up existing subscriptions
  if (unsubscribeReferrals) {
    unsubscribeReferrals()
    unsubscribeReferrals = null
  }
  if (unsubscribePayments) {
    unsubscribePayments()
    unsubscribePayments = null
  }
  
  // Initialize new subscriptions if user is authenticated
  if (newUser) {
    initializeSubscriptions()
  } else {
    referrals.value = []
    payments.value = {}
    loading.value = false
  }
}, { immediate: true })

// Listen for team membership changes
onMounted(() => {
  window.addEventListener('teamMembershipChanged', handleTeamMembershipChange)
})

onUnmounted(() => {
  if (unsubscribeReferrals) unsubscribeReferrals()
  if (unsubscribePayments) unsubscribePayments()
  window.removeEventListener('teamMembershipChanged', handleTeamMembershipChange)
})

// Form handlers
const resetForm = () => {
  Object.assign(formData, {
    customerName: '',
    monthlyValue: '',
    status: 'In pipeline',
    startDate: '',
    endDate: ''
  })
  showAddForm.value = false
  editingReferral.value = null
  showSuccessMessage.value = ''
  showErrorMessage.value = ''
}

const resetPaymentForm = () => {
  Object.assign(paymentFormData, {
    customerId: '',
    month: '',
    amount: '',
    paymentStatus: 'paid',
    invoiceStatus: false
  })
  showAddPaymentForm.value = false
  showSuccessMessage.value = ''
  showErrorMessage.value = ''
}

const handleSubmit = async () => {
  // Validate required fields based on status
  if (!formData.customerName) {
    showErrorMessage.value = 'Customer name is required'
    return
  }
  
  if (formData.status !== 'In pipeline' && (!formData.monthlyValue || !formData.startDate)) {
    showErrorMessage.value = 'Monthly value and start date are required for active referrals'
    return
  }

  try {
    loading.value = true
    const referralData = {
      customerName: formData.customerName,
      monthlyValue: formData.status === 'In pipeline' ? 0 : parseFloat(formData.monthlyValue),
      status: formData.status,
      startDate: formData.status === 'In pipeline' ? null : formData.startDate,
      endDate: formData.endDate || null
    }

    if (editingReferral.value) {
      await updateReferral(editingReferral.value.id, referralData)
      showSuccessMessage.value = 'Referral updated successfully!'
    } else {
      await addReferral(referralData)
      showSuccessMessage.value = 'Referral added successfully!'
    }

    resetForm()
  } catch (error) {
    console.error('Error saving referral:', error)
    showErrorMessage.value = 'Failed to save referral: ' + error.message
  } finally {
    loading.value = false
  }
}

const handleAddPayment = async () => {
  showSuccessMessage.value = ''
  showErrorMessage.value = ''
  
  if (!paymentFormData.customerId || !paymentFormData.month || !paymentFormData.amount) {
    showErrorMessage.value = 'Please fill in all required fields'
    return
  }

  const customer = referrals.value.find(r => r.id === paymentFormData.customerId)
  if (!customer) {
    showErrorMessage.value = 'Customer not found'
    return
  }

  try {
    loading.value = true
    await addPayment(paymentFormData)
    showSuccessMessage.value = `Payment added successfully for ${customer.customerName}!`
    
    setTimeout(() => {
      resetPaymentForm()
    }, 2000)
  } catch (error) {
    console.error('Error adding payment:', error)
    showErrorMessage.value = 'Failed to add payment: ' + error.message
  } finally {
    loading.value = false
  }
}

const handleEdit = (referral) => {
  editingReferral.value = referral
  Object.assign(formData, {
    customerName: referral.customerName,
    monthlyValue: referral.monthlyValue.toString(),
    status: referral.status,
    startDate: referral.startDate,
    endDate: referral.endDate || ''
  })
  showAddForm.value = true
}

const handleDelete = async (id) => {
  try {
    loading.value = true
    await deleteReferral(id)
    showSuccessMessage.value = 'Referral deleted successfully'
  } catch (error) {
    console.error('Error deleting referral:', error)
    showErrorMessage.value = 'Failed to delete referral: ' + error.message
  } finally {
    loading.value = false
  }
}

const handleDeletePayment = async (customerId, month) => {
  try {
    loading.value = true
    await deletePayment(customerId, month)
    showSuccessMessage.value = 'Payment deleted successfully'
  } catch (error) {
    console.error('Error deleting payment:', error)
    showErrorMessage.value = 'Failed to delete payment: ' + error.message
  } finally {
    loading.value = false
  }
}

const handleUpdatePaymentStatus = async (customerId, month, status) => {
  try {
    await updatePaymentStatus(customerId, month, status)
  } catch (error) {
    console.error('Error updating payment status:', error)
    showErrorMessage.value = 'Failed to update payment status'
  }
}

const handleUpdateInvoiceStatus = async (customerId, month, isInvoiced) => {
  try {
    await updateInvoiceStatus(customerId, month, isInvoiced)
  } catch (error) {
    console.error('Error updating invoice status:', error)
    showErrorMessage.value = 'Failed to update invoice status'
  }
}

// Helper functions
const getPaymentStatus = (customerId, month) => {
  const customerPayments = payments.value[customerId] || []
  const payment = customerPayments.find(p => p.month === month)
  return payment?.status || 'pending'
}

const getInvoiceStatus = (customerId, month) => {
  const customerPayments = payments.value[customerId] || []
  const payment = customerPayments.find(p => p.month === month)
  return payment?.isInvoiced || false
}

const getPaymentAmount = (customerId, month) => {
  const customerPayments = payments.value[customerId] || []
  const payment = customerPayments.find(p => p.month === month)
  return payment?.amount || null
}

const isPaymentValidForMonth = (referral, monthKey) => {
  // Fix timezone issues by parsing dates carefully
  const startDateParts = referral.startDate.split('-')
  const startDate = new Date(parseInt(startDateParts[0]), parseInt(startDateParts[1]) - 1, parseInt(startDateParts[2]))
  
  const paymentMonthParts = monthKey.split('-')
  const paymentMonth = new Date(parseInt(paymentMonthParts[0]), parseInt(paymentMonthParts[1]) - 1, 1)
  
  // First payment is due the month AFTER the start date
  const firstPaymentMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1)
  
  // Check if payment month is after first payment month
  if (paymentMonth < firstPaymentMonth) {
    return false
  }
  
  // If referral has an end date, check if payment month is before/during the end date
  if (referral.endDate) {
    const endDateParts = referral.endDate.split('-')
    const endDate = new Date(parseInt(endDateParts[0]), parseInt(endDateParts[1]) - 1, parseInt(endDateParts[2]))
    
    // Last payment is due the month of the end date (not after)
    const lastPaymentMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 1)
    
    if (paymentMonth > lastPaymentMonth) {
      return false
    }
  }
  
  return true
}

const generateMonthsArray = () => {
  const months = []
  const currentDate = new Date()
  for (let i = 11; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1)
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    months.push({ key: monthKey, name: monthName })
  }
  return months
}

const getPaymentStats = () => {
  const activeRefs = referrals.value.filter(ref => ref.status === 'Active')
  
  const currentMonthPayments = activeRefs.map(ref => ({
    customer: ref.customerName,
    value: ref.monthlyValue,
    status: getPaymentStatus(ref.id, selectedMonth.value),
    invoiced: getInvoiceStatus(ref.id, selectedMonth.value)
  }))

  const totalExpected = currentMonthPayments.reduce((sum, p) => sum + p.value, 0)
  const totalReceived = currentMonthPayments
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + p.value, 0)
  const totalPending = currentMonthPayments
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.value, 0)

  let totalInvoiced = 0
  let totalToBeInvoiced = 0

  referrals.value.forEach(ref => {
    const customerPayments = payments.value[ref.id] || []
    customerPayments.forEach(payment => {
      if (payment.status === 'paid') {
        if (payment.isInvoiced) {
          totalInvoiced += payment.amount
        } else {
          totalToBeInvoiced += payment.amount
        }
      }
    })
  })

  return { 
    totalExpected, 
    totalReceived, 
    totalPending, 
    currentMonthPayments,
    totalInvoiced,
    totalToBeInvoiced
  }
}

// Computed properties
const totalMonthlyValue = computed(() => 
  referrals.value
    .filter(ref => ref.status === 'Active')
    .reduce((sum, ref) => sum + ref.monthlyValue, 0)
)

const activeReferrals = computed(() => 
  referrals.value.filter(ref => ref.status === 'Active').length
)

const paymentStats = computed(() => getPaymentStats())

// Team message handler
const handleTeamMessage = (message) => {
  if (message.type === 'success') {
    showSuccessMessage.value = message.text
  } else if (message.type === 'error') {
    showErrorMessage.value = message.text
  }
}

// Update payment form data
const updatePaymentFormData = (newData) => {
  Object.assign(paymentFormData, newData)
}
</script>