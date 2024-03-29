<script setup>
  import { ref, watch, computed } from 'vue'
  const count = ref(0)
  const msg = ref('')
  const rawHtml = ref('<span style="color: red">This should be red.</span>')


  // Initialize count from localStorage
  const storedCount = localStorage.getItem('count')
  if (storedCount !== null) {
    count.value = Number(storedCount)
  }

  // Update localStorage whenever count changes
  watch(count, (newCount) => {
    localStorage.setItem('count', newCount)
  })

</script>

<template>
  <div>
    <h1>Test</h1>
    <button @click="count++">{{ count }} Click me</button>
    <p>localStorage-Item 'count' = {{ count }}</p>

    <br><br>

    <input v-model="msg" id="editMessage" placeholder="edit me"> <!-- this is neat! -->
    <span>Message: {{ msg }}</span>

    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>



<style scoped>
</style>