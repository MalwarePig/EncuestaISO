const Arreglo = [];
let R1 = 0;
let R2 = 0;
let R3 = 0;
let R4 = 0;
let R5 = 0;
let R6 = 0;
let R7 = 0;
let R8 = 0;
let R9 = 0;
let R10 = 0;
let R11 = 0;
let R12 = 0;
let R13 = 0;
let R14 = 0;
let R15 = 0;
let R16 = 0;
let R17 = 0;
let R18 = 0;
let R19 = 0;
let R20 = 0;
let R21 = 0;
let R22 = 0;
let R23 = 0;
let R24 = 0;
let R25 = 0;
let R26 = 0;
let R27 = 0;
let R28 = 0;
let R29 = 0;
let R30 = 0;
let R31 = 0;
let R32 = 0;
let R33 = 0;
let R34 = 0;
let R35 = 0;
let R36 = 0;
let R37 = 0;
let R38 = 0;
let R39 = 0;
let R40 = 0;
let R41 = 0;
let R42 = 0;
let R43 = 0;
let R44 = 0;
let R45 = 0;
let R46 = 0;
let R47 = 0;
let R48 = 0;
let R49 = 0;
let R50 = 0;
let R51 = 0;
let R52 = 0;
let R53 = 0;
let R54 = 0;
let R55 = 0;
let R56 = 0;
let R57 = 0;
let R58 = 0;
let R59 = 0;
let R60 = 0;
let R61 = 0;
let R62 = 0;
let R63 = 0;
let R64 = 0;
let R64P = "";
let R65 = 0;
let R66 = 0;
let R67 = 0;
let R68 = 0;
let R68P = "";
let R69 = 0;
let R70 = 0;
let R71 = 0;
let R72 = 0;
let Total = 0;
//=========================================== BUSCAR TRABAJADORES POR NUMERO DE NOMINA =================================================//
function Tabla() {
    $.ajax({
        url: "/RArea/" + document.getElementById("Area").value + " " + document.getElementById("Planta").value,
        success: function (data) {
            console.log(data);

            var Planta = data[0].Planta;
            var Area = data[0].Area;
            Arreglo.push(Planta);

            document.getElementById("Text_Planta").value = Planta;
            document.getElementById("Text_Area").value = Area;

            for (let index = 0; index < data.length; index++) {
                R1 = R1 + data[index].Pregunta1;
                R2 = R2 + data[index].Pregunta2;
                R3 = R3 + data[index].Pregunta3;
                R4 = R4 + data[index].Pregunta4;
                R5 = R5 + data[index].Pregunta5;
                R6 = R6 + data[index].Pregunta6;
                R7 = R7 + data[index].Pregunta7;
                R8 = R8 + data[index].Pregunta8;
                R9 = R9 + data[index].Pregunta9;
                R10 = R10 + data[index].Pregunta10;
                R11 = R11 + data[index].Pregunta11;
                R12 = R12 + data[index].Pregunta12;
                R13 = R13 + data[index].Pregunta13;
                R14 = R14 + data[index].Pregunta14;
                R15 = R15 + data[index].Pregunta15;
                R16 = R16 + data[index].Pregunta16;
                R17 = R17 + data[index].Pregunta17;
                R18 = R18 + data[index].Pregunta18;
                R19 = R19 + data[index].Pregunta19;
                R20 = R20 + data[index].Pregunta20;
                R21 = R21 + data[index].Pregunta21;
                R22 = R22 + data[index].Pregunta22;
                R23 = R23 + data[index].Pregunta23;
                R24 = R24 + data[index].Pregunta24;
                R25 = R25 + data[index].Pregunta25;
                R26 = R26 + data[index].Pregunta26;
                R27 = R27 + data[index].Pregunta27;
                R28 = R28 + data[index].Pregunta28;
                R29 = R29 + data[index].Pregunta29;
                R30 = R30 + data[index].Pregunta30;
                R31 = R31 + data[index].Pregunta31;
                R32 = R32 + data[index].Pregunta32;
                R33 = R33 + data[index].Pregunta33;
                R34 = R34 + data[index].Pregunta34;
                R35 = R35 + data[index].Pregunta35;
                R36 = R36 + data[index].Pregunta36;
                R37 = R37 + data[index].Pregunta37;
                R38 = R38 + data[index].Pregunta38;
                R39 = R39 + data[index].Pregunta39;
                R40 = R40 + data[index].Pregunta40;
                R41 = R41 + data[index].Pregunta41;
                R42 = R42 + data[index].Pregunta42;
                R43 = R43 + data[index].Pregunta43;
                R44 = R44 + data[index].Pregunta44;
                R45 = R45 + data[index].Pregunta45;
                R46 = R46 + data[index].Pregunta46;
                R47 = R47 + data[index].Pregunta47;
                R48 = R48 + data[index].Pregunta48;
                R49 = R49 + data[index].Pregunta49;
                R50 = R50 + data[index].Pregunta50;
                R51 = R51 + data[index].Pregunta51;
                R52 = R52 + data[index].Pregunta52;
                R53 = R53 + data[index].Pregunta53;
                R54 = R54 + data[index].Pregunta54;
                R55 = R55 + data[index].Pregunta55;
                R56 = R56 + data[index].Pregunta56;
                R57 = R57 + data[index].Pregunta57;
                R58 = R58 + data[index].Pregunta58;
                R59 = R59 + data[index].Pregunta59;
                R60 = R60 + data[index].Pregunta60;
                R61 = R61 + data[index].Pregunta61;
                R62 = R62 + data[index].Pregunta62;
                R63 = R63 + data[index].Pregunta63;
                R64 = R64 + data[index].Pregunta64;
                R64P = "";
                R65 = R65 + data[index].Pregunta65;
                R66 = R66 + data[index].Pregunta66;
                R67 = R67 + data[index].Pregunta67;
                R68 = R68 + data[index].Pregunta68;
                R68P = "";
                R69 = R69 + data[index].Pregunta69;
                R70 = R70 + data[index].Pregunta70;
                R71 = R71 + data[index].Pregunta71;
                R72 = R72 + data[index].Pregunta72;
            }


            
            // var Nodo = document.getElementById("Dim1");
            // var newText = document.createTextNode(R1+R3);
            // Nodo.appendChild(newText);
            var Nodo = document.getElementById("R1");
            var newText = document.createTextNode(R1+R3);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R2");
            var newText = document.createTextNode(R2+R4);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R3");
            var newText = document.createTextNode(R5);
            Nodo.appendChild(newText);

            
            var Dom1 = (R1+R3) + (R2+R4) + R5;
            Arreglo[10] = Dom1;
            var Nodo = document.getElementById("Dom1");
            var newText = document.createTextNode(Dom1);
            Nodo.appendChild(newText);

            var Cat1 = Arreglo[10];
            //Se obtiene el nodo
            Arreglo[5] = (R1+R3);
            var Nodo = document.getElementById("Cat1");
            //se crea texto para el nodo
            var newText = document.createTextNode(Cat1);
            //se inserta el valor al nodo
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            var Nodo = document.getElementById("R4");
            var newText = document.createTextNode(R6+ R12);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R5");
            var newText = document.createTextNode(R7+ R8);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R6");
            var newText = document.createTextNode(R9 + R10 + R11);
            Nodo.appendChild(newText); 

            var Nodo = document.getElementById("R7");
            var newText = document.createTextNode(R65+ R66 + R67 + R68);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R8");
            var newText = document.createTextNode(R13+ R14);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R9");
            var newText = document.createTextNode(R15+ R16);
            Nodo.appendChild(newText);

            var Dom2 = (R6+ R12) + (R7+ R8) + (R9 + R10 + R11) + (R65+ R66 + R67 + R68) + (R13+ R14) + (R15+ R16);
            Arreglo[11] = Dom2;
            var Nodo = document.getElementById("Dom2");
            var newText = document.createTextNode(Dom2);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R10");
            var newText = document.createTextNode(R25 + R26 + R27 + R28);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R11");
            var newText = document.createTextNode(R23 + R24);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R12");
            var newText = document.createTextNode(R29+ R30);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R13");
            var newText = document.createTextNode(R35+ R36);
            Nodo.appendChild(newText);

            var Dom3 = (R25 + R26 + R27 + R28) + (R23 + R24) + (R29+ R30) + (R35+ R36);
            Arreglo[12] = Dom3;
            var Nodo = document.getElementById("Dom3");
            var newText = document.createTextNode(Dom3);
            Nodo.appendChild(newText);


            var Cat2 = Arreglo[11] + Arreglo[12];
            Arreglo[6] = Cat2;
            var Nodo = document.getElementById("Cat2");
            var newText = document.createTextNode(Cat2);
            Nodo.appendChild(newText);
 
            /////////////////////////////////////////////////
            var Nodo = document.getElementById("R14");
            var newText = document.createTextNode(R17+ R18);
            Nodo.appendChild(newText);

            var Dom4 = (R17+ R18);
            Arreglo[13] = Dom4;
            var Nodo = document.getElementById("Dom4");
            var newText = document.createTextNode(Dom4);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R15");
            var newText = document.createTextNode(R19+ R20);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R16");
            var newText = document.createTextNode(R21+ R22);
            Nodo.appendChild(newText);

            var Dom5 = (R19+ R20) + (R21+ R22);
            Arreglo[14] = Dom5;
            var Nodo = document.getElementById("Dom5");
            var newText = document.createTextNode(Dom5);
            Nodo.appendChild(newText);

            var Cat3 = Arreglo[13] + Arreglo[14];
            Arreglo[7] = Cat3;
            var Nodo = document.getElementById("Cat3");
            var newText = document.createTextNode(Cat3);
            Nodo.appendChild(newText);
            /////////////////////////////////////////////////
            var Nodo = document.getElementById("R17");
            var newText = document.createTextNode(R31 + R32 + R33 + R34);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R18");
            var newText = document.createTextNode(R37 + R38 + R39 + R40 + R41);
            Nodo.appendChild(newText);

            var Dom6 = (R31 + R32 + R33 + R34) + (R37 + R38 + R39 + R40 + R41);
            Arreglo[15] = Dom6;
            var Nodo = document.getElementById("Dom6");
            var newText = document.createTextNode(Dom6);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R19");
            var newText = document.createTextNode(R42 + R43 + R44 + R45 + R46);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R20");
            var newText = document.createTextNode(R69 + R70 + R71 + R72);
            Nodo.appendChild(newText);

            var Dom7 = (R42 + R43 + R44 + R45 + R46) + (R69 + R70 + R71 + R72);
            Arreglo[16] = Dom7;
            var Nodo = document.getElementById("Dom7");
            var newText = document.createTextNode(Dom7);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R21");
            var newText = document.createTextNode(R57 + R58 + R59 + R60 + R61 + R62 + R63 + R64);
            Nodo.appendChild(newText);

            var Dom8 = 0;
            Arreglo[17] = Dom8;
            var Nodo = document.getElementById("Dom8");
            var newText = document.createTextNode(Dom8);
            Nodo.appendChild(newText);

            var Cat4 = Arreglo[15] + Arreglo[16]  + Arreglo[17];
            Arreglo[8] = Cat4;
            var Nodo = document.getElementById("Cat4");
            var newText = document.createTextNode(Cat4);
            Nodo.appendChild(newText);
            /////////////////////////////////////////////////   
            var Nodo = document.getElementById("R22");
            var newText = document.createTextNode(R47 + R48);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R23");
            var newText = document.createTextNode(R49 + R50 + R51 + R52);
            Nodo.appendChild(newText);

            var Dom9 = (R47 + R48) + (R49 + R50 + R51 + R52);
            Arreglo[18] = Dom9;
            var Nodo = document.getElementById("Dom9");
            var newText = document.createTextNode(Dom9);
            Nodo.appendChild(newText);
            
            var Nodo = document.getElementById("R24");
            var newText = document.createTextNode(R55 + R56);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R25");
            var newText = document.createTextNode(R53 + R54);
            Nodo.appendChild(newText);

            var Dom10 = (R55 + R56) + (R53 + R54);
            Arreglo[19] = Dom10;
            var Nodo = document.getElementById("Dom10");
            var newText = document.createTextNode(Dom10);
            Nodo.appendChild(newText);
            
            var Cat5 = Arreglo[18] + Arreglo[19];
            Arreglo[9] = Cat5;
            var Nodo = document.getElementById("Cat5");
            var newText = document.createTextNode(Cat5);
            Nodo.appendChild(newText);
            ///////////////////////////////////////////////
            Arreglo[4] = Arreglo[5] + Arreglo[6] + Arreglo[7] + Arreglo[8] + Arreglo[9];
            var Nodo = document.getElementById("Total");
            var newText = document.createTextNode(Arreglo[4]);
            Nodo.appendChild(newText);
        } //Funcion success
    }); //Ajax
}

function Excel() {
    var sheet_1_data = [{
            'Nombre': Arreglo[0],
            'Nomina': Arreglo[1],
            'Area': Arreglo[2],
            'Planta': Arreglo[3],
            'Total': Arreglo[4],
            'Ambiente de trabajo': Arreglo[5],
            'Condiciones deficientes e insalubres': Arreglo[6],
            'Trabajos peligrosos': Arreglo[7],
            'Factores propios de la actividad': Arreglo[8],
            'Organización del tiempo de trabajo': Arreglo[9],
            'Liderazgo y relaciones en el trabajo': Arreglo[10],
            'Entorno organizacional': Arreglo[11],
            'Condiciones en el ambiente de trabajo': Arreglo[12],
            'Carga de trabajo': Arreglo[13],
            'Falta de control sobre el trabajo': Arreglo[14],
            'Jornada de trabajo': Arreglo[15],
            'Interferencia en la relación trabajo-familia': Arreglo[16],
            'Liderazgo': Arreglo[17],
            'Relaciones en el trabajo': Arreglo[18],
            'Violencia': Arreglo[19],
            'Reconocimiento del desempeño': Arreglo[20],
            'Insuficiente sentido de pertenencia e, inestabilidad': Arreglo[21]
        },
        /*{Total:2, Subtotal:22}*/
    ];
    var sheet_2_data = [{Col_One: 10, Col_Two: 110}, {Col_One: 20,Col_Two: 220}];
    var opts = [{sheetid: 'Sheet One', header: true }, {sheetid: 'Sheet Two',header: false}];
    var result = alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?', [opts, [sheet_1_data, sheet_2_data]]);
}


function ExcelPrueba() {
    const Array = [];

    const O1 = {
        Nombre : 'Sergio',
        Nomina : 564,
        Area : "admin",
        Planta : "Bravo"
    }
    const O2 = {
        Nombre : 'Sergio2',
        Nomina : 5642,
        Area : "admin2",
        Planta : "Bravo2"
    }
    Array.push(01);
    Array.push(02);

    console.log(Array[0]);
    var sheet_1_data = [O1];
  
    var opts = [{sheetid: 'Sheet One', header: true }];
    var result = alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?', [opts, [sheet_1_data]]);
}

 function PruebaExitosa(){
 
    const Array = [];

    const a1 = {
        Nombre : 'Sergio',
        Nomina : 564,
        Area : "admin",
        Planta : "Bravo"
    }

    const a2 = {
        Nombre : 'Sergio2',
        Nomina : 5642,
        Area : "admin2",
        Planta : "Bravo2"
    }
    Array.push(01);
    Array.push(02);

    console.log(Array[0]);
    var sheet_1_data = [];
    sheet_1_data.push(a2);
  
    var opts = [{sheetid: 'Sheet One', header: true }];
    var result = alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?', [opts, [sheet_1_data]]);
 }

function pruebaJason() {
    $.ajax({
        url: "/RArea/" + document.getElementById("Area").value + " " + document.getElementById("Planta").value,
        success: function (data) {
            //console.log(data);
            for (let index = 0; index < data.length; index++) {
                //console.log(JSON.stringify(data[0])); 
            }

        } //Funcion success
    }); //Ajax
    var xx = [{
        'Nombre': "Sergio",
        'Area': "Programacion"
    }];

    xx.push("hola")
    console.log(xx);
}































/*

function Excel() {

    var sheet_1_data;
    $.ajax({
        url: "/RArea/" + document.getElementById("Area").value + " " + document.getElementById("Planta").value,
        success: function (data) {
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                sheet_1_data = [{
                    'Nombre': data[index].Nombre,
                    'Nomina': Arreglo[1],
                    'Area': Arreglo[2],
                    'Planta': Arreglo[3],
                    'Total': Arreglo[4],
                    'Ambiente de trabajo': Arreglo[5],
                    'Condiciones deficientes e insalubres': Arreglo[6],
                    'Trabajos peligrosos': Arreglo[7],
                    'Factores propios de la actividad': Arreglo[8],
                    'Organización del tiempo de trabajo': Arreglo[9],
                    'Liderazgo y relaciones en el trabajo': Arreglo[10],
                    'Entorno organizacional': Arreglo[11],
                    'Condiciones en el ambiente de trabajo': Arreglo[12],
                    'Carga de trabajo': Arreglo[13],
                    'Falta de control sobre el trabajo': Arreglo[14],
                    'Jornada de trabajo': Arreglo[15],
                    'Interferencia en la relación trabajo-familia': Arreglo[16],
                    'Liderazgo': Arreglo[17],
                    'Relaciones en el trabajo': Arreglo[18],
                    'Violencia': Arreglo[19],
                    'Reconocimiento del desempeño': Arreglo[20],
                    'Insuficiente sentido de pertenencia e, inestabilidad': Arreglo[21]
                }];
            }
            var opts = [{
                sheetid: 'Sheet One',
                header: true
            }];
            var result = alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?',
                [opts, [sheet_1_data]]);

        } //Funcion success
    }); //Ajax
}
*/