class Nodo {
	constructor(dato, next) {
		this.dato = dato;
		this.next = next;
	}
}
class LinkedList {
	constructor() {//Constructor
		this.head = null;
		this.tamaño = 0;
	}

	add(dato) {//Agrega nuevo data a un nodo //Error 01
		const newNodo = new Nodo(dato, null);
		if (!this.head) {//error02
			this.head = newNodo;
		} else {
			let current = this.head;
			while (current.next) {//Si existe el siguiente nodo entra al ciclo
				current = current.next;//posicion actual es el siguiente nodo error 03
			}
			current.next = newNodo;
		}
		this.tamaño++;//incrementa el tamaño de la lista
		this.MostrarLista();
	}

	getNodo() {//Imprime cada dato de los nodos separados por -
		let current = this.head;
		let resultado = '';
		while (current) {
			resultado += current.dato + "->";
			current = current.next;
		}
		return resultado;
	}

	getMedia() { //Calcular la media con todos los nodos
		let current = this.head;
		var resultado = 0;
		while (current) {
			resultado = resultado + parseInt(current.dato);
			current = current.next;
		}
		resultado = resultado / this.tamaño;
		
		return resultado;
	}

	getDesviacionST() {//Calcula la desviacion estandar
		var Media = this.getMedia();
		
		let current = this.head;
		let Sumatoria = 0;
		let Desviacion = 0;
		while (current) {
			//alert("Media= " + Media + " Curren dato: " + parseInt(current.dato) + " Sumatoria: " + Sumatoria  );
			Sumatoria = Sumatoria + Math.pow((parseInt(current.dato) - Media), 2);
			//alert(Sumatoria);
			current = current.next;
		}
		Desviacion = Math.sqrt((Sumatoria / (this.tamaño - 1)));
		return Desviacion;
	}

	MostrarLista() {//Imprime la lista en el div
		var x = this.getNodo();//Trae los valores de la lista
		var N_Nodo = document.getElementById("Lista");
		var newText = document.createTextNode(x);
		N_Nodo.textContent = "";//Limpio el texto
		N_Nodo.appendChild(newText);
	}

	MostrarMedia() {
		var x = this.getMedia();
		var N_Nodo = document.getElementById("Media");
		var newText = document.createTextNode(x);
		N_Nodo.textContent = "";
		N_Nodo.appendChild(newText);
	}

	MostrarDesviacion() {
		var x = this.getDesviacionST();//Muestra resultado de Desviacion
		var N_Nodo = document.getElementById("Desviacion");
		var newText = document.createTextNode(x);
		N_Nodo.textContent = "";
		N_Nodo.appendChild(newText);
	}
}

const linkedList = new LinkedList();

function Agregar() {
	var dato = document.getElementById("Dato").value;
	linkedList.add(dato);
	console.log(linkedList);
	document.getElementById("Dato").value = "";
}

function Calcular() {
	linkedList.MostrarMedia();
	linkedList.MostrarDesviacion();
}

// console.log(linkedList.getNodo());









































/*




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
			msg = msg + ' y Valor: ' + formularios[i].elements[j].value;
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
*/