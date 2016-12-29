// Create new instance of speech
const msg = new SpeechSynthesisUtterance();
// Initialize voices variable
let voices = [];
// Grab voice selection
const voicesDropdown = document.querySelector('[name="voice"]');
// Grab options
const options = document.querySelectorAll('[type="range"], [name="text"]');
// Grab buttons
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
// Grab text to voice
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
