function GuardarEncuesta() {

	var msg = '';
	const Encuesta = [];
	var pivote = "";
	var formularios = document.forms;
	var todayDate = new Date().toISOString().slice(0,10);
alert(todayDate);
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

	console.log(Encuesta);
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

function Guardado(Planta, Area) {
	let Declaratoria = $('input[name="Declaratoria"]:checked').val();
	let PreguntaUno = $('input[name="pregunta1"]:checked').val();
	let PreguntaDos = $('input[name="pregunta2"]:checked').val();
	let PreguntaTres = $('input[name="pregunta3"]:checked').val();
	let PreguntaCinco = $('input[name="pregunta5"]:checked').val();
	let PreguntaSeis = $('input[name="pregunta6"]:checked').val();

	var chck_TOS = document.getElementById("cbox1");
	var chck_Fiebre = document.getElementById("cbox2");
	var chck_Respirar = document.getElementById("cbox3");
	var chck_Gusto = document.getElementById("cbox4");
	var chck_Garganta = document.getElementById("cbox5");
	var chck_Cuerpo = document.getElementById("cbox6");
	var chck_Cabeza = document.getElementById("cbox7");
	let Tos = "";
	let Fiebre = "";
	let Respirar = "";
	let Gusto = "";
	let Garganta = "";
	let Cuerpo = "";
	let Cabeza = "";
	let Contador = 0;
	let Acceso = "Aceptado";
	var Fecha = moment().format("YYYY-MM-DD");
	console.log(PreguntaUno, PreguntaDos, PreguntaTres, PreguntaCinco);

	if (PreguntaUno == undefined || PreguntaDos == undefined || PreguntaTres == undefined || PreguntaCinco == undefined || Declaratoria == undefined) {
		Acceso = "Vacio";
	}

	//======================================================================
	if (Declaratoria == "No") {
		Acceso = "Preventivo";
	}
	if (PreguntaTres == "Si") {
		Acceso = "Preventivo";
	}
	if (chck_Cabeza.checked == true) {
		Acceso = "Preventivo";
		Cabeza = "Si";
	}
	if (PreguntaSeis == "Si") {
		Acceso = "Preventivo";
	}
	//======================================================================
	if (PreguntaDos == "Si") {
		Acceso = "Preventivo";
	}
	//======================================================================
	if (chck_TOS.checked == true) {
		Acceso = "Negado";
		Tos = "Si";
	}
	//======================================================================
	if (chck_Fiebre.checked == true) {
		Acceso = "Negado";
		Fiebre = "Si";
	}
	//======================================================================
	if (chck_Respirar.checked == true) {
		Acceso = "Negado";
		Respirar = "Si";
	}
	//======================================================================
	if (chck_Gusto.checked == true) {
		Acceso = "Negado";
		Gusto = "Si";
	}
	//======================================================================
	if (chck_Garganta.checked == true) {
		Acceso = "Negado";
		Garganta = "Si";
	}
	//======================================================================
	if (chck_Cuerpo.checked == true) {
		Acceso = "Negado";
		Cuerpo = "Si";
	}
	//======================================================================

	if (PreguntaUno == "Si") {
		Acceso = "Negado";
	}
	if (PreguntaDos == "Si") {
		Acceso = "Negado";
	}
	if (PreguntaCinco == "Si") {
		Acceso = "Negado";
	}
	var ObjetoTabla = {
		Nombre: document.getElementById("Nombre").value,
		Nomina: document.getElementById("Nomina").value,
		Planta: Planta,
		PreguntaUno: PreguntaUno,
		PreguntaDos: PreguntaDos,
		PreguntaDosText: document.getElementById("pregunta2Text").value,
		PreguntaTres: PreguntaTres,
		PreguntaTresText: document.getElementById("pregunta3Text").value,
		Tos: Tos,
		Fiebre: Fiebre,
		Respirar: Respirar,
		Gusto: Gusto,
		Garganta: Garganta,
		Cuerpo: Cuerpo,
		Cabeza: Cabeza,
		PreguntaCinco: PreguntaCinco,
		PreguntaCincoText: document.getElementById("pregunta5Text").value,
		Acceso: Acceso,
		Declaratoria: Declaratoria,
		PreguntaSeis: PreguntaSeis,
		Area: Area,
		Fecha: Fecha,
		Horario: document.getElementById("Horario").value,
	}

	$.post("/GuardarEncuesta", // url
		{
			ObjetoTabla
		}, // data to be submit
		function (objeto, estatus) { // success callback
			//console.log("objeto: " + objeto + "Estatus: " + estatus);
		});

	if (Acceso == "Vacio") {
		$("#myModalVacio").modal();
		//document.getElementById("Formualario").reset();
		//setTimeout("location.reload()", 3000);
	} else if (Acceso == "Preventivo" || Declaratoria == "No") {
		$("#myModalPreventivo").modal();

	} else if (Acceso == "Negado") {
		$("#myModalNegado").modal();

	} else if (Acceso == "Aceptado") {
		$("#myModalAcceso").modal();

	}
}