<script setup>
import { ref, watch, onMounted, onUnmounted, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useContent } from '../content/useContent.js';

const route = useRoute();
const router = useRouter();
const id = ref(null);
const maxIndex = useContent().numberOfContent.value - 1; // Get the number of content items from useContent.js
const audioPlayer = ref(null);
const playPauseBtn = ref(null);
let timeUpdateEvent = null;

// Define props
const props = defineProps({
  audioSrc: String
});

onMounted(() => {
  id.value = parseInt(route.path.substring(1), 10); // Remove the leading slash and convert to integer
  timeUpdateEvent = () => {
    var percentage = (audioPlayer.value.currentTime / audioPlayer.value.duration) * 100;
    document.getElementById('globalProgressBar').style.width = percentage + '%';
  };
  audioPlayer.value.addEventListener('timeupdate', timeUpdateEvent);
});

// I'm not entirely sure why the if statement is necessary, but it breaks without it, as moving to pages other than those with an audio player will cause an error otherwise.
onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.removeEventListener('timeupdate', timeUpdateEvent);
  }
});

watch(route, () => {
  id.value = parseInt(route.path.substring(1), 10);
  audioPlayer.value.src = props.audioSrc; // Update the audio source
  audioPlayer.value.load(); // Reload the audio player
});

const previousPage = () => {
  if (id.value > 0) {
    id.value--;
    router.push(`/${id.value}`); // Update the route
  }
};

const nextPage = () => {
  if (id.value < maxIndex) {
    id.value++;
    router.push(`/${id.value}`); // Update the route
  }
};

const togglePlayPause = () => {
  if (audioPlayer.value.paused) {
    audioPlayer.value.play();
    playPauseBtn.value.innerHTML = 'Pause'; // Change to pause icon
  } else {
    audioPlayer.value.pause();
    playPauseBtn.value.innerHTML = 'Play'; // Change to play icon
  }
};

</script>

<script>
// 2nd script tag for the import of audioSrc from ContentView.vue. 
// Should probably redo this, but it works for now.
// Tried to delete it, but it broke the app. So it stays for now xD
export default {
  props: {
    audioSrc: String
  },
  // rest of your component
}
</script>

<template>

  <!-- Audio Player -->
  <audio controls id="audioPlayer" ref="audioPlayer">
      <source :src="audioSrc" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>

  <div id="control-bar">

    <div class="progress-bar-container">
        <div id="globalProgressBar"></div>
    </div>

    <div class="button-controls">
        <button class="buttonControl" @click="previousPage">{{ id <= 0 ? "Home" : '<- ' + (id -1) }}</button>
        <button id="playPause" ref="playPauseBtn" @click="togglePlayPause">Play</button>
        <button class="buttonControl" @click="nextPage">{{ id >= maxIndex ? "Fin" : id + 1 + ' ->'}}</button>
    </div>

  </div>

</template>

<style scoped>

/* Hide the original audioplayer from view, but keep it visible to screenreaders */
/* #audioPlayer {
    visibility: hidden;
    position: absolute;
} */


button {
    padding: 10px 20px;
    border: none;
    background-color: white;
    color: #008351;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
}

#control-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height:10x;
  background-color: #008351;
  color: white;
  padding: 10px 0;
  display: flex;
  flex-direction: column;

}

.progress-bar-container {
    height: 10px;
    width: 100%; 
    background-color: grey;
    padding: 0 10px; /* 10px padding on the left and right */
    margin-bottom: 10px;
}


#globalProgressBar {
    height: 10px;
    background-color: #4CAF50; 
    width: 0%; /* Initial width, gets updated by javascript */
    border-radius: 2px;
}


.button-controls {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

.button-controls i {
    margin-right: 5px;
    font-size: 1.2em;
}
</style>
