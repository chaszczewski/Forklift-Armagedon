const myAudio = document.getElementById("myAudio");

function tooglePlay() {
    if (myAudio.paused) {
        myAudio.play()
    } else {
        myAudio.pause()
    }
}

function toogleMute() {
    myAudio.muted = !myAudio.muted;
}

function setVolume(value) {
    myAudio.volume = value
}

document.addEventListener('DOMContentLoaded', function() {
    const myAudio = document.getElementById("myAudio");
    playAudio(); // Wywołaj funkcję odtwarzającą przy załadowaniu strony
  
    function playAudio() {
      myAudio.play().catch(error => console.error("Błąd przy odtwarzaniu:", error));
    }
  });