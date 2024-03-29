<script setup>
  import { ref, watch } from 'vue'
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


  // just an array of languages
  const languages = ref([
    { name: 'Deutsch'},
    { name: 'English'},
    { name: 'Türkçe'}
  ])

  const activeLanguage = ref(localStorage.getItem('activeLanguage'))
  if (activeLanguage == null){
    localStorage.setItem('activeLanguage', 'Deutsch')
  }

  // Update localStorage whenever activeLanguage changes
  watch(activeLanguage, (newLanguage) => {
    localStorage.setItem('activeLanguage', newLanguage)
  })
  








</script>

<template>
  <div>
    <h1>Test</h1>
    <button @click="count++">{{ count }} Click me</button>
    <p>localStorage-Item 'count' = {{ count }}</p>

    <br><br>

    <ul>
      <li v-for="language in languages" :key="language.name">
        <button @click="activeLanguage=language.name">{{ language.name }}</button>
      </li>
    </ul>
    <p>Currently active Language: {{ activeLanguage }}</p>

    <br><br>

    <input v-model="msg" id="editMessage" placeholder="edit me"> <!-- this is neat! -->
    <span>Message: {{ msg }}</span>

    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>



<style scoped>

</style>