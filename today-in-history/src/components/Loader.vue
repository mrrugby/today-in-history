<!-- src/components/Loader.vue -->
<template>
  <div class="loader-container">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.spinner {
  border: 8px solid var(--spinner-bg);
  border-top: 8px solid var(--spinner-color);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>