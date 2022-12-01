const Arreglo = [];
//=========================================== BUSCAR TRABAJADORES POR NUMERO DE NOMINA =================================================//
function Tabla() {
    $.ajax({
        url: '/Empleado/' + document.getElementById("NumeroNomina").value + '|' + document.getElementById("PlantaSelect").value,
        success: function (data) {
            var Nombre = data[0].Nombre;
            Arreglo.push(Nombre);
            var Nomina = data[0].Nomina;
            Arreglo.push(Nomina);
            var Area = data[0].Area;
            Arreglo.push(Area);
            var Planta = data[0].Planta;
            Arreglo.push(Planta);
            document.getElementById("Nombre").value = Nombre;
            document.getElementById("Nomina").value = Nomina;
            document.getElementById("Planta").value = Planta;

            var R1 = data[0].Pregunta1;
            var R2 = data[0].Pregunta2;
            var R3 = data[0].Pregunta3;
            var R4 = data[0].Pregunta4;
            var R5 = data[0].Pregunta5;
            var R6 = data[0].Pregunta6;
            var R7 = data[0].Pregunta7;
            var R8 = data[0].Pregunta8;
            var R9 = data[0].Pregunta9;
            var R10 = data[0].Pregunta10;
            var R11 = data[0].Pregunta11;
            var R12 = data[0].Pregunta12;
            var R13 = data[0].Pregunta13;
            var R14 = data[0].Pregunta14;
            var R15 = data[0].Pregunta15;
            var R16 = data[0].Pregunta16;
            var R17 = data[0].Pregunta17;
            var R18 = data[0].Pregunta18;
            var R19 = data[0].Pregunta19;
            var R20 = data[0].Pregunta20;
            var R21 = data[0].Pregunta21;
            var R22 = data[0].Pregunta22;
            var R23 = data[0].Pregunta23;
            var R24 = data[0].Pregunta24;
            var R25 = data[0].Pregunta25;
            var R26 = data[0].Pregunta26;
            var R27 = data[0].Pregunta27;
            var R28 = data[0].Pregunta28;
            var R29 = data[0].Pregunta29;
            var R30 = data[0].Pregunta30;
            var R31 = data[0].Pregunta31;
            var R32 = data[0].Pregunta32;
            var R33 = data[0].Pregunta33;
            var R34 = data[0].Pregunta34;
            var R35 = data[0].Pregunta35;
            var R36 = data[0].Pregunta36;
            var R37 = data[0].Pregunta37;
            var R38 = data[0].Pregunta38;
            var R39 = data[0].Pregunta39;
            var R40 = data[0].Pregunta40;
            var R41 = data[0].Pregunta41;
            var R42 = data[0].Pregunta42;
            var R43 = data[0].Pregunta43;
            var R44 = data[0].Pregunta44;
            var R45 = data[0].Pregunta45;
            var R46 = data[0].Pregunta46;
            var R47 = data[0].Pregunta47;
            var R48 = data[0].Pregunta48;
            var R49 = data[0].Pregunta49;
            var R50 = data[0].Pregunta50;
            var R51 = data[0].Pregunta51;
            var R52 = data[0].Pregunta52;
            var R53 = data[0].Pregunta53;
            var R54 = data[0].Pregunta54;
            var R55 = data[0].Pregunta55;
            var R56 = data[0].Pregunta56;
            var R57 = data[0].Pregunta57;
            var R58 = data[0].Pregunta58;
            var R59 = data[0].Pregunta59;
            var R60 = data[0].Pregunta60;
            var R61 = data[0].Pregunta61;
            var R62 = data[0].Pregunta62;
            var R63 = data[0].Pregunta63;
            var R64 = data[0].Pregunta64;
            var R64P = data[0].Pregunta64P;
            var R65 = data[0].Pregunta65;
            var R66 = data[0].Pregunta66;
            var R67 = data[0].Pregunta67;
            var R68 = data[0].Pregunta68;
            var R68P = data[0].Pregunta68P;
            var R69 = data[0].Pregunta69;
            var R70 = data[0].Pregunta70;
            var R71 = data[0].Pregunta71;
            var R72 = data[0].Pregunta72;
            var Total = 0;


            // var Nodo = document.getElementById("Dim1");
            // var newText = document.createTextNode(R1+R3);
            // Nodo.appendChild(newText);
            var Nodo = document.getElementById("R1");
            var newText = document.createTextNode(R1 + R3);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R2");
            var newText = document.createTextNode(R2 + R4);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R3");
            var newText = document.createTextNode(R5);
            Nodo.appendChild(newText);


            var Dom1 = (R1 + R3) + (R2 + R4) + R5;
            Arreglo[10] = Dom1;
            var Nodo = document.getElementById("Dom1");
            var newText = document.createTextNode(Dom1);
            Nodo.appendChild(newText);

            var Cat1 = Arreglo[10];
            //Se obtiene el nodo
            Arreglo[5] = Cat1;
            var Nodo = document.getElementById("Cat1");
            //se crea texto para el nodo
            var newText = document.createTextNode(Cat1);
            //se inserta el valor al nodo
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            var Nodo = document.getElementById("R4");
            var newText = document.createTextNode(R6 + R12);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R5");
            var newText = document.createTextNode(R7 + R8);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R6");
            var newText = document.createTextNode(R9 + R10 + R11);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R7");
            var newText = document.createTextNode(R65 + R66 + R67 + R68);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R8");
            var newText = document.createTextNode(R13 + R14);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R9");
            var newText = document.createTextNode(R15 + R16);
            Nodo.appendChild(newText);

            var Dom2 = (R6 + R12) + (R7 + R8) + (R9 + R10 + R11) + (R65 + R66 + R67 + R68) + (R13 + R14) + (R15 + R16);
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
            var newText = document.createTextNode(R29 + R30);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R13");
            var newText = document.createTextNode(R35 + R36);
            Nodo.appendChild(newText);

            var Dom3 = (R25 + R26 + R27 + R28) + (R23 + R24) + (R29 + R30) + (R35 + R36);
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
            var newText = document.createTextNode(R17 + R18);
            Nodo.appendChild(newText);

            var Dom4 = (R17 + R18);
            Arreglo[13] = Dom4;
            var Nodo = document.getElementById("Dom4");
            var newText = document.createTextNode(Dom4);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R15");
            var newText = document.createTextNode(R19 + R20);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R16");
            var newText = document.createTextNode(R21 + R22);
            Nodo.appendChild(newText);

            var Dom5 = (R19 + R20) + (R21 + R22);
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

            var Dom8 = (R57 + R58 + R59 + R60 + R61 + R62 + R63 + R64);
            Arreglo[17] = Dom8;
            var Nodo = document.getElementById("Dom8");
            var newText = document.createTextNode(Dom8);
            Nodo.appendChild(newText);

            var Cat4 = Arreglo[15] + Arreglo[16] + Arreglo[17];
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
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var Categoriass = Valores(Arreglo);

            var Nodo = document.getElementById("Cat1");
            var newText = document.createTextNode(" - " + Categoriass[0]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Cat2");
            var newText = document.createTextNode(" - " + Categoriass[1]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Cat3");
            var newText = document.createTextNode(" - " + Categoriass[2]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Cat4");
            var newText = document.createTextNode(" - " + Categoriass[3]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Cat5");
            var newText = document.createTextNode(" - " + Categoriass[4]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom1");
            var newText = document.createTextNode(" - " + Categoriass[5]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom2");
            var newText = document.createTextNode(" - " + Categoriass[6]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom3");
            var newText = document.createTextNode(" - " + Categoriass[7]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom4");
            var newText = document.createTextNode(" - " + Categoriass[8]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom5");
            var newText = document.createTextNode(" - " + Categoriass[9]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom6");
            var newText = document.createTextNode(" - " + Categoriass[10]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom7");
            var newText = document.createTextNode(" - " + Categoriass[1]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom8");
            var newText = document.createTextNode(" - " + Categoriass[12]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom9");
            var newText = document.createTextNode(" - " + Categoriass[13]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Dom10");
            var newText = document.createTextNode(" - " + Categoriass[14]);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("Total");
            var newText = document.createTextNode(" - " + Categoriass[15]);
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
    var sheet_2_data = [{
        Col_One: 10,
        Col_Two: 110
    }, {
        Col_One: 20,
        Col_Two: 220
    }];
    var opts = [{
        sheetid: 'Sheet One',
        header: true
    }, {
        sheetid: 'Sheet Two',
        header: false
    }];
    var result = alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?',
        [opts, [sheet_1_data, sheet_2_data]]);
}

function Valores(valores) {
    var Categorias = []
    var Cat1 = valores[5];
    var Cal_Cat1 = "";
    //Categoria 1
    if (Cat1 < 5) {
        Cal_Cat1 = "Nulo o despreciable";
    } else if ((Cat1 >= 5) && (Cat1 < 9)) {
        Cal_Cat1 = "Bajo";
    } else if ((Cat1 >= 9) && (Cat1 < 11)) {
        Cal_Cat1 = "Medio";
    } else if ((Cat1 >= 11) && (Cat1 < 14)) {
        Cal_Cat1 = "Alto";
    } else if ((Cat1 >= 14)) {
        Cal_Cat1 = "Muy alto";
    }
    Categorias.push(Cal_Cat1);

    //Categoria 2
    var Cat2 = valores[6];
    var Cal_Cat2 = "";
    if (Cat2 < 15) {
        Cal_Cat2 = "Nulo o despreciable";
    } else if ((Cat2 >= 15) && (Cat2 < 30)) {
        Cal_Cat2 = "Bajo";
    } else if ((Cat2 >= 30) && (Cat2 < 45)) {
        Cal_Cat2 = "Medio";
    } else if ((Cat2 >= 45) && (Cat2 < 60)) {
        Cal_Cat2 = "Alto";
    } else if ((Cat2 >= 60)) {
        Cal_Cat2 = "Muy alto";
    }
    Categorias.push(Cal_Cat2);
    //Categoria 3
    var Cat3 = valores[7];
    var Cal_Cat3 = "";
    if (Cat3 < 5) {
        Cal_Cat3 = "Nulo o despreciable";
    } else if ((Cat3 >= 5) && (Cat3 < 7)) {
        Cal_Cat3 = "Bajo";
    } else if ((Cat3 >= 7) && (Cat3 < 10)) {
        Cal_Cat3 = "Medio";
    } else if ((Cat3 >= 10) && (Cat3 < 13)) {
        Cal_Cat3 = "Alto";
    } else if ((Cat3 >= 13)) {
        Cal_Cat3 = "Muy alto";
    }
    Categorias.push(Cal_Cat3);

    //Categoria 4
    var Cat4 = valores[8];
    var Cal_Cat4 = "";
    if (Cat4 < 14) {
        Cal_Cat4 = "Nulo o despreciable";
    } else if ((Cat4 >= 14) && (Cat4 < 29)) {
        Cal_Cat4 = "Bajo";
    } else if ((Cat4 >= 29) && (Cat4 < 42)) {
        Cal_Cat4 = "Medio";
    } else if ((Cat4 >= 42) && (Cat4 < 58)) {
        Cal_Cat4 = "Alto";
    } else if ((Cat4 >= 58)) {
        Cal_Cat4 = "Muy alto";
    }
    Categorias.push(Cal_Cat4);

    //Categoria 5
    var Cat5 = valores[9];
    var Cal_Cat5 = "";
    if (Cat5 < 10) {
        Cal_Cat5 = "Nulo o despreciable";
    } else if ((Cat5 >= 10) && (Cat5 < 14)) {
        Cal_Cat5 = "Bajo";
    } else if ((Cat5 >= 14) && (Cat5 < 18)) {
        Cal_Cat5 = "Medio";
    } else if ((Cat5 >= 18) && (Cat5 < 23)) {
        Cal_Cat5 = "Alto";
    } else if ((Cat5 >= 23)) {
        Cal_Cat5 = "Muy alto";
    }
    Categorias.push(Cal_Cat5);

    //Dominio 1
    var Dom1 = valores[10];
    var Cal_Dom1 = "";
    if (Dom1 < 5) {
        Cal_Dom1 = "Nulo o despreciable";
    } else if ((Dom1 >= 5) && (Dom1 < 9)) {
        Cal_Dom1 = "Bajo";
    } else if ((Dom1 >= 9) && (Dom1 < 11)) {
        Cal_Dom1 = "Medio";
    } else if ((Dom1 >= 11) && (Dom1 < 14)) {
        Cal_Dom1 = "Alto";
    } else if ((Dom1 >= 14)) {
        Cal_Dom1 = "Muy alto";
    }
    Categorias.push(Cal_Dom1);

    //Dominio 2
    var Dom2 = valores[11];
    var Cal_Dom2 = "";
    if (Dom2 < 15) {
        Cal_Dom2 = "Nulo o despreciable";
    } else if ((Dom2 >= 15) && (Dom2 < 21)) {
        Cal_Dom2 = "Bajo";
    } else if ((Dom2 >= 21) && (Dom2 < 27)) {
        Cal_Dom2 = "Medio";
    } else if ((Dom2 >= 27) && (Dom2 < 37)) {
        Cal_Dom2 = "Alto";
    } else if ((Dom2 >= 37)) {
        Cal_Dom2 = "Muy alto";
    }
    Categorias.push(Cal_Dom2);

    //Dominio 3
    var Dom3 = valores[12];
    var Cal_Dom3 = "";
    if (Dom3 < 11) {
        Cal_Dom3 = "Nulo o despreciable";
    } else if ((Dom3 >= 11) && (Dom3 < 16)) {
        Cal_Dom3 = "Bajo";
    } else if ((Dom3 >= 16) && (Dom3 < 21)) {
        Cal_Dom3 = "Medio";
    } else if ((Dom3 >= 21) && (Dom3 < 25)) {
        Cal_Dom3 = "Alto";
    } else if ((Dom3 >= 25)) {
        Cal_Dom3 = "Muy alto";
    }
    Categorias.push(Cal_Dom3);

    //Dominio 4
    var Dom4 = valores[13];
    var Cal_Dom4 = "";
    if (Dom4 < 1) {
        Cal_Dom4 = "Nulo o despreciable";
    } else if ((Dom4 >= 1) && (Dom4 < 2)) {
        Cal_Dom4 = "Bajo";
    } else if ((Dom4 >= 2) && (Dom4 < 4)) {
        Cal_Dom4 = "Medio";
    } else if ((Dom4 >= 4) && (Dom4 < 6)) {
        Cal_Dom4 = "Alto";
    } else if ((Dom4 >= 6)) {
        Cal_Dom4 = "Muy alto";
    }
    Categorias.push(Cal_Dom4);

    //Dominio 5
    var Dom5 = valores[14];
    var Cal_Dom5 = "";
    if (Dom5 < 4) {
        Cal_Dom5 = "Nulo o despreciable";
    } else if ((Dom5 >= 4) && (Dom5 < 6)) {
        Cal_Dom5 = "Bajo";
    } else if ((Dom5 >= 6) && (Dom5 < 8)) {
        Cal_Dom5 = "Medio";
    } else if ((Dom5 >= 8) && (Dom5 < 10)) {
        Cal_Dom5 = "Alto";
    } else if ((Dom5 >= 10)) {
        Cal_Dom5 = "Muy alto";
    }
    Categorias.push(Cal_Dom5);

    //Dominio 6
    var Dom6 = valores[15];
    var Cal_Dom6 = "";
    if (Dom6 < 9) {
        Cal_Dom6 = "Nulo o despreciable";
    } else if ((Dom6 >= 9) && (Dom6 < 12)) {
        Cal_Dom6 = "Bajo";
    } else if ((Dom6 >= 12) && (Dom6 < 16)) {
        Cal_Dom6 = "Medio";
    } else if ((Dom6 >= 16) && (Dom6 < 20)) {
        Cal_Dom6 = "Alto";
    } else if ((Dom6 >= 20)) {
        Cal_Dom6 = "Muy alto";
    }
    Categorias.push(Cal_Dom6);

    //Dominio 7
    var Dom7 = valores[16];
    var Cal_Dom7 = "";
    if (Dom7 < 10) {
        Cal_Dom7 = "Nulo o despreciable";
    } else if ((Dom7 >= 10) && (Dom7 < 13)) {
        Cal_Dom7 = "Bajo";
    } else if ((Dom7 >= 13) && (Dom7 < 17)) {
        Cal_Dom7 = "Medio";
    } else if ((Dom7 >= 17) && (Dom7 < 21)) {
        Cal_Dom7 = "Alto";
    } else if ((Dom7 >= 21)) {
        Cal_Dom7 = "Muy alto";
    }
    Categorias.push(Cal_Dom7);

    //Dominio 8
    var Dom8 = valores[17];
    var Cal_Dom8 = "";
    if (Dom8 < 10) {
        Cal_Dom8 = "Nulo o despreciable";
    } else if ((Dom8 >= 10) && (Dom8 < 13)) {
        Cal_Dom8 = "Bajo";
    } else if ((Dom8 >= 13) && (Dom8 < 17)) {
        Cal_Dom8 = "Medio";
    } else if ((Dom8 >= 17) && (Dom8 < 21)) {
        Cal_Dom8 = "Alto";
    } else if ((Dom8 >= 21)) {
        Cal_Dom8 = "Muy alto";
    }
    Categorias.push(Cal_Dom8);


    //Dominio 9
    var Dom9 = valores[18];
    var Cal_Dom9 = "";
    if (Dom9 < 6) {
        Cal_Dom9 = "Nulo o despreciable";
    } else if ((Dom9 >= 6) && (Dom9 < 10)) {
        Cal_Dom9 = "Bajo";
    } else if ((Dom9 >= 10) && (Dom9 < 14)) {
        Cal_Dom9 = "Medio";
    } else if ((Dom9 >= 14) && (Dom9 < 18)) {
        Cal_Dom9 = "Alto";
    } else if ((Dom9 >= 18)) {
        Cal_Dom9 = "Muy alto";
    }
    Categorias.push(Cal_Dom9);

    //Dominio 10
    var Dom10 = valores[19];
    var Cal_Dom10 = "";
    if (Dom9 < 6) {
        Cal_Dom10 = "Nulo o despreciable";
    } else if ((Dom10 >= 6) && (Dom10 < 10)) {
        Cal_Dom10 = "Bajo";
    } else if ((Dom10 >= 10) && (Dom10 < 14)) {
        Cal_Dom10 = "Medio";
    } else if ((Dom10 >= 14) && (Dom10 < 18)) {
        Cal_Dom10 = "Alto";
    } else if ((Dom10 >= 18)) {
        Cal_Dom10 = "Muy alto";
    }
    Categorias.push(Cal_Dom10);

    // Total
    var Total = valores[5] + valores[6] + valores[7] + valores[8] + valores[9];
    var Cal_Total = "";
    if (Total < 50) {
        Cal_Total = "Nulo o despreciable";
    } else if ((Total >= 50) && (Total < 75)) {
        Cal_Total = "Bajo";
    } else if ((Total >= 75) && (Total < 99)) {
        Cal_Total = "Medio";
    } else if ((Total >= 99) && (Total < 140)) {
        Cal_Total = "Alto";
    } else if ((Total >= 140)) {
        Cal_Total = "Muy alto";
    }
  
    Categorias.push(Cal_Total);
    return Categorias;
}