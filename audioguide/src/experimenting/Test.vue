<script setup>
  import { ref, watch, computed } from 'vue'

  // just an array of languages
  const languages = ref([
    { name: 'Deutsch'},
    { name: 'English'},
    { name: 'Türkçe'}
  ])

  // Set Deutsch as default language.
  const activeLanguage = ref(localStorage.getItem('activeLanguage'))
  if (activeLanguage.value == null){
    localStorage.setItem('activeLanguage', 'Deutsch')
  }

  // Update localStorage whenever activeLanguage changes
  watch(activeLanguage, (newLanguage) => {
    localStorage.setItem('activeLanguage', newLanguage)
  })
  


  // retrieve Content from useContent.js file
  import { useContent } from '../content/useContent.js'

  const { content, activeContent, setActiveContent } = useContent()
  const activeIndex = ref(0) // Initialize activeIndex
  // computed basically creates a reactive value that updates whenever the value it depends on changes (even though it won't change in this case, it is still required to give access to the length of the content array)
  const indexLength = computed(() => content.value.length - 1)

  const updateContent = () => {
    setActiveContent(activeIndex.value)
  }



  const previousPage = () => {
    if (activeIndex.value > 0){
      activeIndex.value--
    }
    updateContent()
  }

  const nextPage = () => {
    if (activeIndex.value < content.value.length - 1){
      activeIndex.value++
    }
    updateContent()
  }
  






</script>

<template>
  <div>
    <h1>Test</h1>
    <ul>
      <li v-for="language in languages" :key="language.name">
        <button @click="activeLanguage=language.name">{{ language.name }}</button>
      </li>
    </ul>
    <p>Currently active Language: {{ activeLanguage }}</p>

    <br><br>

    <!-- Retrieve Content from useContent.js -->
    <p>{{ activeContent.index }}</p>
    <img :src="activeContent.picture" :alt="activeContent.altText">
    <h1>{{ activeContent.title }}</h1>
    <article>{{ activeContent.text }}</article>

    <!-- Buttons to move between pages -->
    <input type="number" id="changeContent" v-model.number="activeIndex" @change="updateContent">
    <div>
      <button class="buttonControl" @click="previousPage">{{ activeContent.index <= 0 ? "Home" : activeContent.index - 1 }}</button>
      <button disabled>{{ activeContent.index }}</button>
      <button class="buttonControl" @click="nextPage">{{ activeContent.index >= indexLength ? " " : activeContent.index + 1}}</button>
    </div>
  </div>
</template>



<style scoped>

.buttonControl {
  border: none;
  color: rgb(131, 21, 21);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>../content/useContent.js