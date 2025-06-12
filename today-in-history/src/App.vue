<!-- src/App.vue -->
<template>
  <div :class="['app', darkMode ? 'dark' : 'light']">
    <Header @toggleDarkMode="toggleDarkMode" :darkMode="darkMode" />
    
    <main>
      <Loader v-if="isLoading" />
      <Error v-if="error" :message="error" />
      
      <div v-if="events" class="events-container">
        <section v-for="(eventList, category) in events" :key="category">
          <h2>{{ category }}</h2>
          <div class="cards">
            <EventCard 
              v-for="event in eventList" 
              :key="event.id" 
              :event="event" 
            />
          </div>
        </section>
      </div>
    </main>

    <footer>
      <p>&copy; {{ currentYear }} Today in History</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import Loader from './components/Loader.vue';
import Error from './components/Error.vue';
import EventCard from './components/EventCard.vue';

// Reactive state
const isLoading = ref(true);
const error = ref(null);
const events = ref(null);
const darkMode = ref(true);
const currentYear = new Date().getFullYear();

// Function to fetch events
const fetchEvents = async () => {
  try {
    const today = new Date();
    const month = today.getMonth() + 1; // Months are zero-indexed
    const day = today.getDate();

    const response = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch historical events.');
    }

    const data = await response.json();
    events.value = groupEvents(data);
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

// Function to group events by categories
const groupEvents = (data) => {
  const grouped = {};
  if (data.events) grouped['Events'] = data.events.slice(0, 10); // Limit to 10 for brevity
  if (data.births) grouped['Births'] = data.births.slice(0, 10);
  if (data.deaths) grouped['Deaths'] = data.deaths.slice(0, 10);
  if (data.holidays && data.holidays.length > 0) grouped['Holidays'] = data.holidays.slice(0, 10);
  return grouped;
};

// Toggle dark mode
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark', darkMode.value);
};

// Fetch events on component mount
onMounted(() => {
  fetchEvents();
});
</script>

<style>
/* Import global styles */
</style>