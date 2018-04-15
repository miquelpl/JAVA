var msgDE = new SpeechSynthesisUtterance();
var voicesDE = window.speechSynthesis.getVoices();
msgDE.voice = voicesDE[1];
msgDE.lang = 'de-DE';

function loroDE(missatge) {
	msgDE.text = missatge;
	speechSynthesis.speak(msgDE);
}

