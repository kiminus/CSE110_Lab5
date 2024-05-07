// explore.js

window.addEventListener("DOMContentLoaded", init);
const voice_image = document.querySelector("#expose img");
const selectors = document.getElementById("voice-select");
const voices_entries = [
  [
    "assets/images/air-horn.png",
    "assets/images/car-horn.png",
    "assets/images/party-horn.png",
  ],
  ["air horn", "car horn", "party horn"],
  [
    "assets/audio/air-horn.mp3",
    "assets/audio/car-horn.mp3",
    "assets/audio/party-horn.mp3",
  ],
];
//console.log(selectors);
function init() {
  voice_image.src = "assets/images/no-image.png";
  populateVoices(voices_entries[1]);
}

function populateVoices(names) {
  for (var i = 0; i < 3; i++) {
    const option = document.createElement("option");
    option.value = names[i];
    option.text = names[i];
    selectors.appendChild(option);
  }
  console.log(selectors);
  selectors.addEventListener("change", when_voice_selected);
}
