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

	add(dato,Variable) {//Agrega nuevo data a un nodo //Error 01
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
		this.MostrarLista(Variable);
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

	MostrarLista(Variable) {//Imprime la lista en el div
		var x = this.getNodo();//Trae los valores de la lista
		var N_Nodo = document.getElementById("Lista"+Variable);
		var newText = document.createTextNode(x);
		N_Nodo.textContent = "";//Limpio el texto
		N_Nodo.appendChild(newText);
	}

	MostrarMedia(Varibale) {
		var x = this.getMedia();
		var N_Nodo = document.getElementById("Media"+Varibale);
		var newText = document.createTextNode(x);
		N_Nodo.textContent = "";
		N_Nodo.appendChild(newText);
	}

	MostrarDesviacion(Varibale) {
		var x = this.getDesviacionST();//Muestra resultado de Desviacion
		var N_Nodo = document.getElementById("Desviacion"+Varibale);
		var newText = document.createTextNode(x);
		N_Nodo.textContent = "";
		N_Nodo.appendChild(newText);
	}

	//Funcion para insertar nodos en la columna X de la tabla Datos
	ColumnaX(Dato, columna){
		var TablaDatos = document.getElementById('Datos').getElementsByTagName('tbody')[0];
        // inserta una fila al final de la tabla
        var newRow = TablaDatos.insertRow(TablaDatos.rows.length);
		var indice = TablaDatos.rows.length -1;
        newRow.setAttribute("id", "fila" + indice);//se asigna id al incrementar cada fila +1 para contar el encabezado
            // inserta una celda en el indice 0
			var newCell = newRow.insertCell(columna);
			newCell.setAttribute("id", "ColumnaX" + indice);
            // adjuntar el texto al nodo
            var newText = document.createTextNode(Dato);
            newCell.appendChild(newText);
	}
	
	//Funcion para insertar nodos en la columna Y de la tabla Datos
	ColumnaY(Dato, columna){
		var Tabla = document.getElementById('Datos').getElementsByTagName('tbody')[0];
		var Total = Tabla.rows.length;
		var Fila_Actual = document.getElementById('fila'+columna);
        // inserta una fila al final de la tabla

			var newCell = Fila_Actual.insertCell(1);
			newCell.setAttribute("id", "ColumnaY" + columna);
            // adjuntar el texto al nodo
            var newText = document.createTextNode(Dato);
            newCell.appendChild(newText);
    }
}

const linkedListX = new LinkedList();//M
const linkedListY = new LinkedList();//ADD
var IndiceColumnaY = 0;

//Obtiene el dato dependiendo si es de la lista X o Y
function Agregar(Condicion) {
	if(Condicion == 'X'){
		var dato = parseFloat(document.getElementById("DatoX").value);
		//Se agrega el dato a la ListaEnlazada X
		linkedListX.add(dato,'X');
		//Se limpia el input para otro dato
		document.getElementById("DatoX").value = "";
		var columna = 0;
		//se envia el dato y la columna donde debe incertar el dato
		linkedListX.ColumnaX(dato,columna);
	}else{
		//Lo mismo pero para la columna Y
		var dato = parseFloat(document.getElementById("DatoY").value);
		linkedListY.add(dato,'Y');
		console.log(linkedListY);
		document.getElementById("DatoY",).value = "";
		linkedListY.ColumnaY(dato,IndiceColumnaY);
		IndiceColumnaY++;
	}
}

//Calcula la media y la desvia
function Calcular() {
	linkedListX.MostrarMedia('X');
	linkedListX.MostrarDesviacion('X');

	linkedListY.MostrarMedia('Y');
	linkedListY.MostrarDesviacion('Y');
}

//se Obtienen los datos de las columnas x e y para crear las otras columnas, agrega los nodos con los valores ya calculados
function CalcularTabla(){
	//Obtener datos de tabla
	var tabla = document.getElementById("Datos");
    var total = tabla.rows.length//Total de filas
	for (var x = 1; x < total; x++) {//inica en uno para evitar encabezados
		var DatoX = tabla.rows[x].cells[0].childNodes[0].nodeValue;
		var DatoY = tabla.rows[x].cells[1].childNodes[0].nodeValue;

		var Fila_Actual = document.getElementById('fila'+(x-1));//el id empieza desde 0 por eso se resta uno al total
		//Nodo para operacion de multiplicacion
			var newCell = Fila_Actual.insertCell(2);//el nuero representa la columna
			newCell.setAttribute("id", "ColumnaXY" + (x-1));
            var Mutliplicacion = DatoX * DatoY;
            var newText = document.createTextNode(Mutliplicacion.toFixed(4));
			newCell.appendChild(newText);
		//Nodo para operacion X Cuadrada
			var newCell = Fila_Actual.insertCell(3);//el nuero representa la columna
			newCell.setAttribute("id", "ColumnaXpow" + (x-1));
			var XCuadrada = Math.pow(DatoX, 2);
            var newText = document.createTextNode(XCuadrada.toFixed(4));
			newCell.appendChild(newText);
		//Nodo para operacion Y Cuadrada
			var newCell = Fila_Actual.insertCell(4);//el nuero representa la columna
			newCell.setAttribute("id", "ColumnaYpow" + (x-1));
			var YCuadrada = Math.pow(DatoY, 2);
            var newText = document.createTextNode(YCuadrada.toFixed(4));
            newCell.appendChild(newText);
	} //fin de for de columnas
	//hace los calculos de sumatorias y agrega la ultima fila
	Sumatorias();
}
 
//Es la misma funcion que el boton agregar pero con el evento enter
function runScript(e,Condicion) {
    if (e.keyCode == 13) {
		if(Condicion == 'X'){
			var dato = parseFloat(document.getElementById("DatoX").value);
			if(dato >= 0){
				linkedListX.add(dato,'X');
				document.getElementById("DatoX").value = "";
				var columna = 0;
				linkedListX.ColumnaX(dato,columna);
			}
		}else{
			var dato = parseFloat(document.getElementById("DatoY").value);
				if(dato >= 0){
				linkedListY.add(dato,'Y');
				console.log(linkedListY);
				document.getElementById("DatoY",).value = "";
				linkedListY.ColumnaY(dato,IndiceColumnaY);
				IndiceColumnaY++;
			}
		}
    }
}

//hace los calculos de sumatorias y agrega la ultima fila
function Sumatorias(){
	//Obtener datos de tabla
	var tabla = document.getElementById("Datos");
	var totalFilas = tabla.rows.length//Total de filas
	var totalColumnas = 5;//Total de filas
	var Arreglo = [];
	for(var j = 0; j < totalColumnas; j++){
		var Suma = 0;
		for (var x = 1; x < totalFilas; x++) {//inica en uno para evitar encabezados
		
			var Dato = parseInt(tabla.rows[x].cells[j].childNodes[0].nodeValue);
			Suma = Suma + Dato;
		}//For filas
		Arreglo.push(Suma);
	}//For Columnas

	var TablaAlmacen = document.getElementById('Datos').getElementsByTagName('tbody')[0];
        // inserta una fila al final de la tabla
        var newRow = TablaAlmacen.insertRow(TablaAlmacen.rows.length);
        let indice = (TablaAlmacen.rows.length + 1);
        newRow.setAttribute("id", "fila" + indice);//se asigna id al incrementar cada fila +1 para contar el encabezado
        for (var x = 0; x < Arreglo.length; x++) {
            // inserta una celda en el indice 0
			var newCell = newRow.insertCell(x);
			newCell.setAttribute("id", "Sumatoria" + x);
			newCell.style.backgroundColor="#ff5733";
            // adjuntar el texto al nodo
            var newText = document.createTextNode(Arreglo[x]);
            newCell.appendChild(newText);
		}
		var tabla = document.getElementById("Datos");
		var totalFilas = tabla.rows.length//Total de filas
		var PromedioX = parseInt(tabla.rows[(totalFilas-1)].cells[0].childNodes[0].nodeValue) / (totalFilas-2);//Se restan 2 por encabezado y fila sumatoria
		var PromedioY = parseInt(tabla.rows[(totalFilas-1)].cells[1].childNodes[0].nodeValue) / (totalFilas-2);//Se restan 2 por encabezado y fila sumatoria

		var TablaAlmacen = document.getElementById('Datos').getElementsByTagName('tbody')[0];
		var newRow = TablaAlmacen.insertRow(TablaAlmacen.rows.length);
		
		var newCell = newRow.insertCell(0);
			newCell.setAttribute("id", "PromedioX");
			newCell.style.backgroundColor="#d6a1eb";
            // adjuntar el texto al nodo
            var newText = document.createTextNode(PromedioX);
			newCell.appendChild(newText);
			
		var newCell = newRow.insertCell(1);
			newCell.setAttribute("id", "PromedioY");
			newCell.style.backgroundColor="#d6a1eb";
            // adjuntar el texto al nodo
            var newText = document.createTextNode(PromedioY);
			newCell.appendChild(newText);
			B_Uno();
			R_Uno();
}


function B_Uno(){
	var tabla = document.getElementById("Datos");
	var totalFilas = parseInt(tabla.rows.length);//Total de filas
	var FilaSumatorias = (totalFilas-2);//Para obtener la fila sumatorias
	var FilaAVG = (totalFilas-1);//Para obtener la fila sumatoriaXY
	var N = totalFilas - 3;//Total de datos
	var SumXY =  tabla.rows[FilaSumatorias].cells[2].childNodes[0].nodeValue; //obtiene el valor sumatoriaXY
	var PromedioX =  tabla.rows[FilaAVG].cells[0].childNodes[0].nodeValue; //obtiene el valor Promedio X
	var PromedioY =  tabla.rows[FilaAVG].cells[1].childNodes[0].nodeValue; //obtiene el valor Promedio Y
	var SumX = tabla.rows[FilaSumatorias].cells[3].childNodes[0].nodeValue; //obtiene el valor sumatoria X
	
	var Numerador = SumXY - (N * PromedioX * PromedioY);
	var Denominador = SumX - (N * Math.pow(PromedioX,2));
	var Resultado = Numerador / Denominador;
	document.getElementById("B1").value = Resultado.toFixed(3);
}

function R_Uno(){
	var tabla = document.getElementById("Datos");
	var totalFilas = parseInt(tabla.rows.length);//Total de filas
	var FilaSumatorias = (totalFilas-2);//Para obtener la fila sumatorias
	var FilaAVG = (totalFilas-1);//Para obtener la fila sumatoriaXY
	var N = totalFilas - 3;//Total de datos
	var SumXY =  tabla.rows[FilaSumatorias].cells[2].childNodes[0].nodeValue; //obtiene el valor sumatoriaXY
	var SumX = tabla.rows[FilaSumatorias].cells[0].childNodes[0].nodeValue; //obtiene el valor sumatoria X
	var SumY = tabla.rows[FilaSumatorias].cells[1].childNodes[0].nodeValue; //obtiene el valor sumatoria X
	var SumPowX = tabla.rows[FilaSumatorias].cells[3].childNodes[0].nodeValue; //obtiene el valor sumatoria X
	var SumPowY = tabla.rows[FilaSumatorias].cells[4].childNodes[0].nodeValue; //obtiene el valor sumatoria X

	var PromedioX =  tabla.rows[FilaAVG].cells[0].childNodes[0].nodeValue; //obtiene el valor Promedio X
	var PromedioY =  tabla.rows[FilaAVG].cells[1].childNodes[0].nodeValue; //obtiene el valor Promedio Y

	var Numerador = (N * SumXY) - (SumX * SumY);
	var Denominador = ((N *SumPowX) - Math.pow(SumX,2)) * ((N * SumPowY) - Math.pow(SumY,2));
	var Resultado = Numerador / Math.sqrt(Denominador).toFixed(3);
	document.getElementById("R1").value = Resultado.toFixed(4);
	document.getElementById("R1_2").value = Math.pow(Resultado,2).toFixed(4);
	var B1 = document.getElementById("B1").value;
	var ResultadoB0 = PromedioY - B1 * PromedioX;
	document.getElementById("B0").value = ResultadoB0.toFixed(4);

	var LOC = 386;

	var RL = ResultadoB0 + (LOC * B1);
	document.getElementById("RL").value = RL;
}

































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