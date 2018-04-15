function escucha(dIdioma){
	var miPizarra = document.getElementById("oreja:pizarra");

	console.log('inicio');
	console.log('resultado: '+ resultado);
	console.log('buffer: '+ buffer);

	testSpeech(dIdioma);

	recognition.onend = function(event) {
		console.log('recognition.onend');
		console.log('final');
		console.log('resultado: '+ resultado);
		console.log('buffer: '+ buffer);
		console.log('longitud: '+ buffer.length);

		if(buffer.length>0){
			miPizarra.value += buffer + '\n';
		}
		escucha(dIdioma);
	}
}

