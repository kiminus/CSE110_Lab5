// expose.js

window.addEventListener("DOMContentLoaded", init);
const horn_image = document.querySelector("#expose img");
const selectors = document.getElementById("horn-select");
const voices_entries = [
  [
    "assets/images/air-horn.png",
    "assets/images/car-horn.png",
    "assets/images/party-horn.png",
  ],
  ["air-horn", "car-horn", "party-horn"],
  [
    "assets/audio/air-horn.mp3",
    "assets/audio/car-horn.mp3",
    "assets/audio/party-horn.mp3",
  ],
];
console.log(selectors);
function init() {
  console.log(voices_entries[0][1]);
  horn_image.src = voices_entries[0][1];
  selectors.addEventListener("change", when_voice_selected);
}
function when_voice_selected() {
  console.log(selectors.value);
  for (var i = 0; i < 3; i++) {
    if (voices_entries[1][i] == selectors.value) {
      horn_image.src = voices_entries[0][i];
      return;
    }
  }
  //console.log(entry_index);
}
