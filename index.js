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
// Create voice selection dropdown
function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
}
// Find selected voice and set msg.voice
function setVoice() {
  console.log('Changing voice...');
  msg.voice = voices.find(voice => voice.name === this.value);
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
