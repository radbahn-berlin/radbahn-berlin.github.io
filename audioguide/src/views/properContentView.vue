<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const data = ref(null);

onMounted(() => {
  const id = route.params.id;
  data.value = {
    1: {
      image: 'https://via.placeholder.com/150',
      logo: 'https://via.placeholder.com/50',
      title: 'Fahrradreparaturstation 1',
      description: 'Short description for station 1',
      transcript: 'Longer text for station 1',
    },
    2: {
      image: 'https://via.placeholder.com/150',
      logo: 'https://via.placeholder.com/50',
      title: 'Fahrradreparaturstation 2',
      description: 'Short description for station 2',
      transcript: 'Longer text for station 2',
    },
    // Add more stations as needed
  }[id];
});
</script>

<template>
  <div class="station" v-if="data">
    <img :src="data.image" alt="Station image">
    <div class="title">
      <img :src="data.logo" alt="Logo">
      <h1>{{ data.title }}</h1>
    </div>
    <p>{{ data.description }}</p>
    <details>
      <summary>Transcript</summary>
      <p>{{ data.transcript }}</p>
    </details>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>