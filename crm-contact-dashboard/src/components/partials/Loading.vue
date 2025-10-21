<template>
  <div class="loading-wrapper">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.loading-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f6fa;
  font-family: 'Poppins', sans-serif;
  color: var(--dark-blue-color);
  gap: 16px;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(76, 92, 150, 0.2);
  border-top-color: var(--dark-blue-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
