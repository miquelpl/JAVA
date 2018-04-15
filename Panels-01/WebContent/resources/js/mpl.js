function loro(nIdioma, dIdioma, missatge) {

	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();

	msg.voice = voices[nIdioma];
	msg.lang = dIdioma;

	msg.text = missatge;
	speechSynthesis.speak(msg);
}

