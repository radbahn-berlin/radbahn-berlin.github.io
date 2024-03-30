<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useContent } from '../content/useContent.js';
import Controls from '../components/Controls.vue';

const route = useRoute();
const id = ref(0); // Initialize id

onMounted(() => {
  id.value = parseInt(route.path.substring(1), 10); // Set id to the value at the end of the URL
});

watch(route, () => {
  id.value = parseInt(route.path.substring(1), 10); // Set id to the value at the end of the URL
});

const { content, activeContent, setActiveContent } = useContent();

// Update the content when id changes
// Is this still necessary? YES
  watch(id, () => {
    setActiveContent(id.value);
  });
</script>


<template>
  <main>
    <img id="mainImg" :src="activeContent.picture" :alt="activeContent.altText">
    <div class="title">
      <img :src="'https://via.placeholder.com/50'" alt="Logo">
      <h1>{{ activeContent.title }}</h1>
    </div>
    <article>{{ activeContent.text }}</article>
    <details>
      <summary>Transcript</summary>
      <p>Longer text for station {{ id }} : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </details>

  </main>


  <Controls :audioSrc="activeContent.audioSrc" />


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