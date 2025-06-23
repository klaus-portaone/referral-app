<template>
  <div 
    v-if="message" 
    :class="[
      'px-4 py-3 rounded-lg mb-6 flex items-center justify-between',
      type === 'success' ? 'bg-green-50 border border-green-200 text-green-600' : 'bg-red-50 border border-red-200 text-red-600'
    ]"
  >
    <span>{{ message }}</span>
    <button @click="$emit('close')" class="ml-4 text-current hover:opacity-70">
      <X :size="16" />
    </button>
  </div>
</template>

<script setup>
import { X } from 'lucide-vue-next'

defineProps({
  message: String,
  type: {
    type: String,
    default: 'success'
  }
})

defineEmits(['close'])
</script>