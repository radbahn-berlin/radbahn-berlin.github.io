<script setup>
import { ref, onMounted, watch, computed } from 'vue';
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
</style>