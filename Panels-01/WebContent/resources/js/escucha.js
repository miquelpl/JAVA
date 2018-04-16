function escucha(dIdioma){
	var miPizarra = document.getElementById("oreja:pizarra");

	testSpeech(dIdioma);

	recognition.onend = function(event) {
		if(buffer.length>0){
			miPizarra.value = buffer;
			rc();
		}
		escucha(dIdioma);
	}
}

