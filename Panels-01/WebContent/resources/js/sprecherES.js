var msgES = new SpeechSynthesisUtterance();
var voicesES = window.speechSynthesis.getVoices();
msgES.voice = voicesES[5];
msgES.lang = 'es-ES';

function loroES(missatge) {
	msgES.text = missatge;
	speechSynthesis.speak(msgES);
}

