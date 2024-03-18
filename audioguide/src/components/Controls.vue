<template>

  <!-- Audio Player -->
  <audio controls id="audioPlayer">
      <source src="../audiotracks/Afr_03_Fallbeispiel_Berlin.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>

  <footer>
      <div class="progress-bar-container">
          <div id="globalProgressBar"></div>
      </div>
      <div class="footer-controls">
          <!-- currently uses stock symbols, maybe change them to some we like and also add text: "|< 2 Play 4 >|" -->
          <button id="prevTrack"><i class="fa fa-backward"></i>3</button>
          <button id="playPause"><i class="fa fa-play"></i></button>
          <button id="nextTrack">5 <i class="fa fa-forward"></i></button>
      </div>
  </footer>
</template>

<script>
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
                this.innerHTML = '<i class="fa fa-pause"></i>'; // Change to pause icon
            } else {
                audioPlayer.pause();
                this.innerHTML = '<i class="fa fa-play"></i>'; // Change to play icon
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
    document.getElementById('nextTrack').addEventListener('click', nextTrack);
    document.getElementById('prevTrack').addEventListener('click', prevTrack);

    // Reset button to play icon when audio finishes
    audioPlayer.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>'; // Change to play icon
    });
});
</script>


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

footer {
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


.footer-controls {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

.footer-controls i {
    margin-right: 5px;
    font-size: 1.2em;
}
</style>
