<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useContent } from '../content/useContent.js';

const route = useRoute();
const router = useRouter();
const path = ref(null);
const id = ref(null);

// Stuff for the path and id 
onMounted(() => {
  path.value = route.path;
  id.value = parseInt(route.path.substring(1), 10); // Remove the leading slash and convert to integer
});
// This was required again for when using the buttons or nav elements to change the url
watch(route, () => {
  path.value = route.path;
  id.value = parseInt(route.path.substring(1), 10);
});


// Not sure I need all of this, I'm only really interested in getting the max index
const { content, setActiveContent } = useContent();
const indexLength = computed(() => content.value.length - 1);

const updateContent = () => {
  setActiveContent(id.value);
};

const previousPage = () => {
  if (id.value > 0) {
    id.value--;
  }
  updateContent();
  router.push(`/${id.value}`); // Update the route
};

const nextPage = () => {
  if (id.value < indexLength.value) {
    id.value++;
  }
  updateContent();
  router.push(`/${id.value}`); // Update the route
};

/* IMPORTANT 
All of the below is actually just stuff I ported from the original main.js.
Needs to be reassessed and possibly rewritten to fit the new Vue 3 setup.
*/
// Some funkiness to make sure the DOM is loaded before any code is executed
document.addEventListener('DOMContentLoaded', function() {
    // Get the audio player
    var audioPlayer = document.getElementById('audioPlayer');
    var progressBar = document.getElementById('globalProgressBar');
    var playPauseBtn = document.getElementById('playPause');

    // Update the progress bar as the audio plays
    audioPlayer.addEventListener('timeupdate', function() {
        var percentage = (this.currentTime / this.duration) * 100;
        progressBar.style.width = percentage + '%';
    });

    // Play/Pause functionality
    if (playPauseBtn) 
    {
        playPauseBtn.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play();
                this.innerHTML = 'Pause'; // Change to pause icon
            } else {
                audioPlayer.pause();
                this.innerHTML = 'Play'; // Change to play icon
            }
        });
    }

    // Functions to update the audio source and any associated text and images
    // Or to move between pages
    function nextTrack() {
        // Logic to switch to the next track
        console.log("next track");
    }
    
    function prevTrack() {
        // Logic to switch to the previous track
        console.log("previous track");
    }
    
    // Adding event listeners to next and previous buttons
    // document.getElementById('nextTrack').addEventListener('click', nextTrack);
    // document.getElementById('prevTrack').addEventListener('click', prevTrack);

    // Reset button to play icon when audio finishes
    audioPlayer.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>'; // Change to play icon
    });
});
// end of original main.js port
</script>

<template>

  <!-- Audio Player -->
  <audio controls id="audioPlayer">
      <source src="../audiotracks/Afr_03_Fallbeispiel_Berlin.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>

  <div id="control-bar">

    <div class="progress-bar-container">
        <div id="globalProgressBar"></div>
    </div>

    <div class="button-controls">
        <button class="buttonControl" @click="previousPage">{{ id <= 0 ? "Home" : '<- ' + (id -1) }}</button>
        <button id="playPause">Play</button>
        <button class="buttonControl" @click="nextPage">{{ id >= indexLength ? "Fin" : id + 1 + ' ->'}}</button>
    </div>

  </div>

</template>

<style scoped>

/* Hide the original audioplayer from view, but keep it visible to screenreaders */
#audioPlayer {
    visibility: hidden;
    position: absolute;
}


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
