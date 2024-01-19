
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
