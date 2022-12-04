function identificador() {
	var aleatorio = Math.round(Math.random() * (10000 - 1) + 1);
	document.getElementById("identificador").value = aleatorio;
}

function GuardarEncuesta() {
	var todayDate = new Date().toISOString().slice(0, 10);
	let Identificador = document.getElementById("identificador").value;
	let Nombre = document.getElementById("Nombre").value;
	let Nomina = document.getElementById("Nomina").value;
	let Area = document.getElementById("Area").value;
	let Planta = document.getElementById("Planta").value;

	let campo = 'pregunta';

	const Encuesta = [Identificador, Nombre, Nomina, Area, Planta];

	for (let index = 1; index <= 72; index++) {
		for (let j = 0; j < 5; j++) {

			if (document.getElementsByName(campo + index)[j].checked) {
				/* console.log("Pregunta: " + index + " j: " + j)
				console.log() */
				let respuesta = document.getElementsByName(campo + index)[j].value;
				Encuesta.push(respuesta)
				console.log(document.getElementsByName(campo + index)[j])
			}
		}

		if (index == 64 || index == 68) {
			for (let z = 0; z < 2; z++) {
				/* console.log("Pregunta: "+campo +  "-5 " + index + " z: " + z)
				console.log(document.getElementsByName(campo+index + "-5")[z].checked) */
				if (document.getElementsByName(campo + index + "-5")[z].checked) {
					let respuesta = document.getElementsByName(campo + index + "-5")[z].value;
					Encuesta.push(respuesta)
				}
			}
		}
	}
 
	Encuesta.push(todayDate); //lanza la fecha al final
	//=========================================== Guardar =================================================//
	$.post("/GuardarEncuesta",{ // url
		Encuesta
	}, //data to be submit
	function (objeto, estatus) { // success callback
		if(true){
			console.log(objeto,estatus)
			alert("Registro completo!")
			Reiniciar();
		}else{
			alert("Sucedio un error!")
		}
		
	});
}

function Reiniciar() { 
	window.location.href = "https://encuestaiso-production.up.railway.app/";
}

function SegundaEtapaTrue() {
	$("#pregunta69e").prop("checked", true);
	$("#pregunta70e").prop("checked", true);
	$("#pregunta71e").prop("checked", true);
	$("#pregunta72e").prop("checked", true);
}

function SegundaEtapaFalse() {
	$("#pregunta69e").prop("checked", false);
	$("#pregunta70e").prop("checked", false);
	$("#pregunta71e").prop("checked", false);
	$("#pregunta72e").prop("checked", false);
}

function PrimeraEtapaTrue() {
	$("#pregunta65e").prop("checked", true);
	$("#pregunta66e").prop("checked", true);
	$("#pregunta67e").prop("checked", true);
	$("#pregunta68e").prop("checked", true);
}

function PrimeraEtapaFalse() {
	$("#pregunta65e").prop("checked", false);
	$("#pregunta66e").prop("checked", false);
	$("#pregunta67e").prop("checked", false);
	$("#pregunta68e").prop("checked", false);
}