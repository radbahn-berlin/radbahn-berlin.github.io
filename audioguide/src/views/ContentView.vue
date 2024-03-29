<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const path = ref(null);

onMounted(() => {
  path.value = route.path.substring(1); // Remove the leading slash
});

// Watch the route and update the path when the route changes (this is required for when using the buttons or nav elements to change the url)
watch(route, () => {
  path.value = route.path.substring(1);
});
</script>

<template>
  <main>
    <div class="station">
      <img id="mainImg" :src="'https://via.placeholder.com/150'" alt="Station image">
      <div class="title">
        <img :src="'https://via.placeholder.com/50'" alt="Logo">
        <h1>Fahrradreparaturstation {{ path }}</h1>
      </div>
      <p>Short description for station {{ path }}</p>
      <details>
        <summary>Transcript</summary>
        <p>Longer text for station: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."{{ path }}</p>
      </details>
    </div>
  </main>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  gap: 10px;
}
h1 {
  font-size: large;
}
#mainImg {
  width: 100%;
}
</style>