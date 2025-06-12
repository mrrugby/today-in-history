// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';

// Register the service worker
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // Optional: Notify the user about the update
  },
  onOfflineReady() {
    // Optional: Notify the user that the app is ready offline
  },
});

createApp(App).mount('#app');