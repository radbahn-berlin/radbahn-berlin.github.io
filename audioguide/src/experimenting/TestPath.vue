<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const path = ref(null);
const id = ref(null);

onMounted(() => {
  path.value = route.path;
  id.value = route.path.substring(1);
});
</script>

<template>
  <h1>Test: {{ path }}</h1>
  <h1>Test: {{ id }}</h1>
</template>