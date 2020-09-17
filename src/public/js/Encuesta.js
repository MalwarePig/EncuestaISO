
function GuardarEncuesta() {

	var msg = '';
	const Encuesta = [];
	var pivote = "";
	var formularios = document.forms;
	var todayDate = new Date().toISOString().slice(0,10);
	for (var i = 0; i < formularios.length; i++) {
		alert("Total Formularios: " + formularios.length);
		for (var j = 0; j < formularios[0].elements.length; j++) {
			if (formularios[0].elements[j].name != pivote) { //Mientras la pregunta no se repita
				//alert("i"+i + " J" +j);
				pivote = formularios[0].elements[j].name; //Renombrar pivote
				if(pivote == 'Nombre' || pivote == 'Nomina' || pivote == 'Area' || pivote == 'Planta'){
					Encuesta.push(formularios[0].elements[j].value);
				}else if(pivote != ''){
					//alert(pivote);
					var valor = $("input:radio[name="+pivote+"]:checked").val();
					Encuesta.push(valor);
				}
				//alert($("input:radio[name="+pivote+"]:checked").val());
				//$('input:radio[name=edad]:checked').val()
				
				//console.log("Pregunta: " + formularios[i].elements[j].name + "Valor: " + formularios[i].elements[j].value);
			}
			/*let PreguntaUno = $('input[name="pregunta1"]:checked').val();
			msg = msg + '\n\nElemento ' + j + ' del formulario ' + (i + 1) + ' tiene id: ' + formularios[i].elements[j].id;
			msg = msg + ' y Valor: ' + formularios[i].elements[j].value;*/
		}
	}
	//Encuesta.pop();//Elimina la ultima posicion del objeto(un bug crea un espacio vacio)
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

function SegundaEtapaTrue(){
	$("#pregunta69e").prop("checked", true);
	$("#pregunta70e").prop("checked", true);
	$("#pregunta71e").prop("checked", true);
	$("#pregunta72e").prop("checked", true);
}

function SegundaEtapaFalse(){
	$("#pregunta69e").prop("checked", false);
	$("#pregunta70e").prop("checked", false);
	$("#pregunta71e").prop("checked", false);
	$("#pregunta72e").prop("checked", false);
}

function PrimeraEtapaTrue(){
	$("#pregunta65e").prop("checked", true);
	$("#pregunta66e").prop("checked", true);
	$("#pregunta67e").prop("checked", true);
	$("#pregunta68e").prop("checked", true);
}

function PrimeraEtapaFalse(){
	$("#pregunta65e").prop("checked", false);
	$("#pregunta66e").prop("checked", false);
	$("#pregunta67e").prop("checked", false);
	$("#pregunta68e").prop("checked", false);
}