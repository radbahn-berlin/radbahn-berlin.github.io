<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const path = ref(null);

onMounted(() => {
  path.value = route.path;
});
</script>

<template>
  <h1>Test: {{ path }}</h1>
  <h1>Test: {{ path.substring(1) }}</h1>
</template>