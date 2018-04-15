var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
var buffer;
var resultado;

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();

function loro(nIdioma, dIdioma, missatge, esperarRespuesta) {

	msg.voice = voices[nIdioma];
	msg.lang = dIdioma;
	msg.text = missatge;

	speechSynthesis.speak(msg);

	msg.onend = function(event) {
		console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' milliseconds.');
		if(esperarRespuesta){
			testSpeech();
		}
	}
}

function testSpeech(dIdioma) {

	var phrase = 'Hallo';
	var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
//	var recognition = new SpeechRecognition();
	var speechRecognitionList = new SpeechGrammarList();
	speechRecognitionList.addFromString(grammar, 1);
	recognition.grammars = speechRecognitionList;
	recognition.lang = dIdioma;
	recognition.interimResults = false;
	recognition.maxAlternatives = 1;

	buffer = '';
	resultado = 0;

	recognition.start();

	recognition.onresult = function(event) {
		var speechResult = event.results[0][0].transcript;
		console.log('Confidence: ' + event.results[0][0].confidence);
		console.log('Result: ' + speechResult);
		buffer = speechResult;
		resultado = 0;
	}

	recognition.onspeechend = function() {
		recognition.stop();
	}

	recognition.onerror = function(event) {
		console.log('Error occurred in recognition: ' + event.error);
		buffer = 'Error: ' + event.error;
		resultado = 1;
	}

	recognition.onnomatch = function(event) {
		console.log('Confidence: ' + event.results[0][0].confidence);
		console.log('Result: ' + speechResult);
		buffer = speechResult;
		resultado = 2;
	}
}
