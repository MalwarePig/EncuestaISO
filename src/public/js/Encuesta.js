function GuardarEncuesta() {

	var msg = '';
	const Encuesta = [];
	var pivote = "";
	var formularios = document.forms;
	var todayDate = new Date().toISOString().slice(0,10);
	for (var i = 0; i < formularios.length; i++) {
		for (var j = 0; j < formularios[i].elements.length; j++) {
			if (formularios[i].elements[j].name != pivote) { //Mientras la pregunta no se repita
				pivote = formularios[i].elements[j].name; //Renombrar pivote
				Encuesta.push(formularios[i].elements[j].value);
				//console.log("Pregunta: " + formularios[i].elements[j].name + "Valor: " + formularios[i].elements[j].value);
			}
			/*let PreguntaUno = $('input[name="pregunta1"]:checked').val();
			msg = msg + '\n\nElemento ' + j + ' del formulario ' + (i + 1) + ' tiene id: ' + formularios[i].elements[j].id;
			msg = msg + ' y Valor: ' + formularios[i].elements[j].value;*/
		}
	}
	Encuesta.pop();//Elimina la ultima posicion del objeto(un bug crea un espacio vacio)
	Encuesta.push(todayDate);//lanza la fecha al final

	//=========================================== Guardar =================================================//
	$.post("/GuardarEncuesta",{ // url
		Encuesta
	}, //data to be submit
	function (objeto, estatus) { // success callback
		//console.log("objeto: " + objeto + "Estatus: " + estatus);
	});
}

function Reiniciar() {
	document.getElementById("Formualario").reset();
	setTimeout("location.reload()", 1000);
}
