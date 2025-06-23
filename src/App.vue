<template>
  <div class="App">
    <LoadingSpinner v-if="loading" />
    <Auth v-else-if="!currentUser" />
    <Dashboard v-else />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuth } from './composables/useAuth'
import Auth from './components/Auth.vue'
import Dashboard from './components/Dashboard.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const { currentUser, loading, initAuth } = useAuth()

onMounted(() => {
  initAuth()
})
</script>

<style>
@import './index.css';
</style>