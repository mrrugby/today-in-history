<!-- src/components/EventCard.vue -->
<template>
  <div class="event-card" @click="shareEvent">
    <h3>{{ event.year }}</h3>
    <p>{{ event.description }}</p>
    <a :href="event.wikipedia" target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
});

// Function to share event using Web Share API
const shareEvent = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `Event from ${props.event.year}`,
        text: props.event.description,
        url: props.event.wikipedia,
      });
    } catch (err) {
      console.error('Share failed:', err.message);
    }
  } else {
    alert('Web Share API not supported in your browser.');
  }
};
</script>

<style scoped>
.event-card {
  background-color: var(--card-bg);
  color: var(--card-text);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-hover-shadow);
}

.event-card h3 {
  margin-top: 0;
  color: var(--accent-color);
}

.event-card a {
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;
}

.event-card a:hover {
  text-decoration: underline;
}
</style>