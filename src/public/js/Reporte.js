//=========================================== BUSCAR TRABAJADORES POR NUMERO DE NOMINA =================================================//
function Tabla() {
    $.ajax({
        url: '/listaMaquinas/' + familia + '',
        success: function (maquinas) {
            for (let i = listMaquina.options.length; i >= 0; i--) { //Borrar elementos option de select
                listMaquina.remove(i);
            }
            for (var i = 0; i < maquinas.length; i++) { //Agregar nuevos options del select

                var option = document.createElement("option");
                option.text = maquinas[i].Nombre;
                listMaquina.add(option);
            }
        }//Funcion success
    });//Ajax
    
}

function Fecha() {
    var tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
    var total = tabla.rows.length//Total de filasa
    for (var j = 0; j < total; j++) {//filas
        let Fecha =  new Date(tabla.rows[j].cells[5].childNodes[0].nodeValue);
        console.log('Fecha tabla ' + Fecha);
        var dd = Fecha.getDate();
        var mm = Fecha.getMonth() + 1;
        var yyyy = Fecha.getFullYear();
        var HH = Fecha.getHours();
        var mi = Fecha.getMinutes();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
        document.getElementById("Fecha" + j).innerHTML = today;
        console.log('Fecha Funcion ' + today);
    }//fin filas
}

function Color() {
    try {
        var tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
        var total = tabla.rows.length//Total de filasa
        let Condicion = "";
        for (var j = 0; j < total; j++) {//filas
            Condicion = tabla.rows[j].cells[0].childNodes[0].nodeValue;
            if (Condicion == "Aceptado") {
                document.getElementById("Fila" + j).style.backgroundColor = " #b5d687 "; //Verde
            } else if (Condicion == "Negado") {
                document.getElementById("Fila" + j).style.backgroundColor = "#e75c5c"; //Rojo
            } else {
                document.getElementById("Fila" + j).style.backgroundColor = "#ee8018 "; //Naranja
            }
        }//fin filas
    } catch (err) {
        console.log(err);
    }
}

function Modal() {
    $("#ModalSection").modal();
    //document.getElementById("Formualario").reset();
    //setTimeout("location.reload()", 3000);
}

function Excel() {
    var table = document.getElementById("Registros");
    var total = table.rows.length;//Total de filas
    console.log(total);
    var tabla = document.getElementById("Registros");
    var wb = XLSX.utils.table_to_book(tabla, { sheet: "Reporte" });
    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Reporte_Covid.xlsx');
}

function Pendientes() {

    var url = window.location.href;
    var Condicion = url.indexOf("ReporteM");
    var Planta = "";
    var tabla = document.getElementById("Registros");
    var total = tabla.rows.length//Total de filas
    let Area = document.getElementById("Area").value;
    if (Condicion > 0) {
        Planta = "Morelos";
        $.ajax({
            url: '/PendientesMorelos/' + Area,
            success: function (data) {

                for (var j = 0; j < data.length; j++) {
                    var existencia = false;
                    var Nombre = data[j].Nombre;
                    var Nomina = data[j].Nomina;
                    var Planta = data[j].Planta;
                    for (var i = 1; i <= total - 1; i++) {
                        if (tabla.rows[i].cells[2].childNodes[0].nodeValue == Nomina) {
                            existencia = true;
                        }
                    }// i Tabla
                    if (existencia == false) {
                        //alert('falta' + Nomina)
                        Arreglo = ['Sin registro', Nombre, Nomina, Planta, '-', '-'];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + j);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                            newCell.style.backgroundColor = "#a9a5a4  "; //gris
                        }
                    }
                }// j data
            }
        })
    } else {
        Planta = "Bravo"
        $.ajax({
            url: '/PendientesBravo/' + Area,
            success: function (data) {

                for (var j = 0; j < data.length; j++) {
                    var existencia = false;
                    var Nombre = data[j].Nombre;
                    var Nomina = data[j].Nomina;
                    var Planta = data[j].Planta;
                    for (var i = 1; i <= total - 1; i++) {
                        if (tabla.rows[i].cells[2].childNodes[0].nodeValue == Nomina) {
                            existencia = true;
                        }
                    }// i Tabla
                    if (existencia == false) {
                        //alert('falta' + Nomina)
                        Arreglo = ['Sin registro', Nombre, Nomina, Planta, '-', '-'];
                        var Tabla = document.getElementById('Registros').getElementsByTagName('tbody')[0];
                        // inserta una fila al final de la tabla
                        var newRow = Tabla.insertRow(Tabla.rows.length);
                        for (var x = 0; x < Arreglo.length; x++) {
                            // inserta una celda en el indice 0
                            var newCell = newRow.insertCell(x);
                            newRow.setAttribute("id", "Fila" + j);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            // adjuntar el texto al nodo
                            var newText = document.createTextNode(Arreglo[x]);
                            if (x == 5) {
                                newCell.setAttribute("id", "Fecha" + i);//se asigna id al incrementar cada fila +1 para contar el encabezado
                            }
                            newCell.appendChild(newText);
                            newCell.style.backgroundColor = "#a9a5a4  "; //gris
                        }
                    }
                }// j data
            }
        })
    }
    //alert("Pendientes: " + total + 'Nomina'+tabla.rows[1].cells[2].childNodes[0].nodeValue);
}

/*==========================================    FORMTATO DE FECHA    ==========================================================================
===============================================================================================================================================*/
function FormtatoFechas(Fecha) {
    var today = new Date(Fecha);
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    var HH = today.getHours();
    var mi = today.getMinutes();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    return today;
}