<!-- src/components/Error.vue -->
<template>
  <div class="error-container">
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.error-container {
  background-color: var(--error-bg);
  color: var(--error-text);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem;
  text-align: center;
}
</style>