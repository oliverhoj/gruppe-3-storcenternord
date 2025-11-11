"use strict";

// funktion der afspiller lyd når boble klikkes og tilføjer pop animation
function handleBubbleClick(event) {
  const bubbleSound = new Audio("sound/bubble-pop.mp3"); //ændrer lydfil til boblelyd
  bubbleSound.play();
}

// venter med at hente js siden tilden hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers to all bubbles
  document.querySelectorAll(".bubble").forEach((bubble) => {
    bubble.addEventListener("click", handleBubbleClick);
  });
});


// lav den nu med skattekisten, når man hover over den så skal der afspilles en lyd af skattekisten der åbnes, med skattekiste-sounden
function handleSkattekisteHover(event) {
  const skattekisteSound = new Audio("sound/skattekiste-sound.mp3");
  skattekisteSound.play();
}

// venter med at hente js siden tilden hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add hover handler to skattekiste
  const skattekiste = document.getElementById("skattekiste");
  skattekiste.addEventListener("mouseover", handleSkattekisteHover);
});