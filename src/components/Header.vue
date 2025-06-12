<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <h1>Today in History</h1>
    <button @click="$emit('toggleDarkMode')" class="theme-toggle" aria-label="Toggle Dark Mode">
      <span v-if="darkMode">🌞</span>
      <span v-else>🌙</span>
    </button>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--header-bg);
  color: var(--header-text);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--header-text);
  transition: transform 0.3s;
}

.theme-toggle:hover {
  transform: rotate(20deg);
}
</style>