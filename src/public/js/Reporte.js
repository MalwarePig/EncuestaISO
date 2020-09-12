const  Arreglo = [];
//=========================================== BUSCAR TRABAJADORES POR NUMERO DE NOMINA =================================================//
function Tabla() {
    $.ajax({
        url: '/Empleado/' + document.getElementById("NumeroNomina").value +'',
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
 
            Total = Total+(R1+R3);
            //Se obtiene el nodo
            Arreglo[5] = (R1+R3);
            var Nodo = document.getElementById("Cat1");
            //se crea texto para el nodo
            var newText = document.createTextNode(R1+R3);
            //se inserta el valor al nodo
            Nodo.appendChild(newText);

            var Dom1 = R1+R3;
            Arreglo[12] = Dom1;
            var Nodo = document.getElementById("Dom1");
            var newText = document.createTextNode(Dom1);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim1");
            // var newText = document.createTextNode(R1+R3);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R1");
            var newText = document.createTextNode(R1+R3);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            Total = Total +(R2+R4);
            Arreglo[6] = (R2+R4);
            var Nodo = document.getElementById("Cat2");
            var newText = document.createTextNode(R2+R4);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R2");
            var newText = document.createTextNode(R2+R4);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            Total = Total + R5;
            Arreglo[7] = (R5);
            var Nodo = document.getElementById("Cat3");
            var newText = document.createTextNode(R5);
            Nodo.appendChild(newText);

            var Nodo = document.getElementById("R3");
            var newText = document.createTextNode(R5);
            Nodo.appendChild(newText);

            /////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim3");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R5");
            var newText = document.createTextNode(R7+R8);
            Nodo.appendChild(newText);
            /////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim4");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R6");
            var newText = document.createTextNode(R9+R10+R11);
            Nodo.appendChild(newText);
            /////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim5");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R7");
            var newText = document.createTextNode(R65+R66+R67+R68);
            Nodo.appendChild(newText);
            /////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim6");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R8");
            var newText = document.createTextNode(R13+R14);
            Nodo.appendChild(newText);
            
            /////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim7");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R9");
            var newText = document.createTextNode(R15+R16);
            Nodo.appendChild(newText);
            ////////////////////////////////////////////////
            var Dom3 = (R25+R26+R27+R28)+(R23+R24)+(R29+R30)+(R35+R36);
            Arreglo[14] = Dom3;
            var Nodo = document.getElementById("Dom3");
            var newText = document.createTextNode(Dom3);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim8");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R10");
            var newText = document.createTextNode(R25+R26+R27+R28);
            Nodo.appendChild(newText);
            ////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim9");
            // var newText = document.createTextNode(20);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R11");
            var newText = document.createTextNode(R23+R24);
            Nodo.appendChild(newText);

            ////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim10");
            // var newText = document.createTextNode(20);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R12");
            var newText = document.createTextNode(R29+R30);
            Nodo.appendChild(newText);

            ////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim11");
            // var newText = document.createTextNode(20);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R13");
            var newText = document.createTextNode(R35+R36);
            Nodo.appendChild(newText);
             //////////////////////////////////////////////////
             var Dom2 = (R6+R12)+(R7+R8)+(R9+R10+R11)+(R65+R66+R67+R68)+(R13+R14)+(R15+R16);
             Arreglo[13] = Dom2;
             var Nodo = document.getElementById("Dom2");
             var newText = document.createTextNode(Dom2);
             Nodo.appendChild(newText);

             var Cat4 = Dom2+Dom3;
             Arreglo[8] = Cat4;
             Total = Total + Cat4;
             var Nodo = document.getElementById("Cat4");
             var newText = document.createTextNode(Cat4);
             Nodo.appendChild(newText);
 
             // var Nodo = document.getElementById("Dim2");
             // var newText = document.createTextNode(92);
             // Nodo.appendChild(newText);
 
             var Nodo = document.getElementById("R4");
             var newText = document.createTextNode(R6+R12);
             Nodo.appendChild(newText);

            //////////////////////////////////////////////////
            var Dom4 = (R17+R18);
            Arreglo[15] = Dom4;
            var Nodo = document.getElementById("Dom4");
            var newText = document.createTextNode(Dom4);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim12");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R14");
            var newText = document.createTextNode(R17+R18);
            Nodo.appendChild(newText);

            ////////////////////////////////////////////////// 
            var Dom5 = (R19+R20) +(R21+R22);
            Arreglo[16] = Dom5;
            var Nodo = document.getElementById("Dom5");
            var newText = document.createTextNode(Dom5);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim13");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R15");
            var newText = document.createTextNode(R19+R20);
            Nodo.appendChild(newText);

            var Cat5 = Dom4 + Dom5;
            Arreglo[9] = Cat5;
            Total = Total + Cat5;
            var Nodo = document.getElementById("Cat5");
            var newText = document.createTextNode(Cat5);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////   
            // var Nodo = document.getElementById("Dim14");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R16");
            var newText = document.createTextNode(R21+R22);
            Nodo.appendChild(newText);

            //////////////////////////////////////////////////
            var Dom6 = (R31+R32+R33+R34)+(R37+R38+R39+R40+R41);
            Arreglo[17] = Dom6;
            var Nodo = document.getElementById("Dom6");
            var newText = document.createTextNode(Dom6);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim15");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R17");
            var newText = document.createTextNode(R31+R32+R33+R34);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////  
            // var Nodo = document.getElementById("Dim16");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R18");
            var newText = document.createTextNode(R37+R38+R39+R40+R41);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            var Dom7 = (R42+R43+R44+R45+R46) +(R69+R70+R71+R72);
            Arreglo[18] = Dom7;
            var Nodo = document.getElementById("Dom7");
            var newText = document.createTextNode(Dom7);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim17");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R19");
            var newText = document.createTextNode(R42+R43+R44+R45+R46);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim18");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R20");
            var newText = document.createTextNode(R69+R70+R71+R72);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            var Dom8 = (R57+R58+R59+R60+R61+R62+R63+R64);
            Arreglo[19] = Dom8;
            var Nodo = document.getElementById("Dom8");
            var newText = document.createTextNode(Dom8);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim19");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R21");
            var newText = document.createTextNode(R57+R58+R59+R60+R61+R62+R63+R64);
            Nodo.appendChild(newText);

            var Cat6 = Dom6+Dom7+Dom8;
            Arreglo[10] = Cat6;
            Total = Total + Cat6;
            var Nodo = document.getElementById("Cat6");
            var newText = document.createTextNode(Cat6);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            var Dom9 = (R47+R48)+(R49+R50+R51+R52);
            Arreglo[20] = Dom9;
            var Nodo = document.getElementById("Dom9");
            var newText = document.createTextNode(Dom9);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim20");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R22");
            var newText = document.createTextNode(R47+R48);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim21");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R23");
            var newText = document.createTextNode(R49+R50+R51+R52);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            var Dom10 = (R55+R56)+(R53+R54);
            Arreglo[21] = Dom10;
            var Nodo = document.getElementById("Dom10");
            var newText = document.createTextNode(Dom10);
            Nodo.appendChild(newText);

            // var Nodo = document.getElementById("Dim22");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R24");
            var newText = document.createTextNode(R55+R56);
            Nodo.appendChild(newText);
            //////////////////////////////////////////////////
            // var Nodo = document.getElementById("Dim23");
            // var newText = document.createTextNode(92);
            // Nodo.appendChild(newText);

            var Nodo = document.getElementById("R25");
            var newText = document.createTextNode(R53+R54);
            Nodo.appendChild(newText);

            var Cat7 = Dom9 + Dom10;
            Arreglo[11] = Cat7;
            Total = Total + Cat7;
            var Nodo = document.getElementById("Cat7");
            var newText = document.createTextNode(Cat7);
            Nodo.appendChild(newText);

            Arreglo[4]=(Total);
            var Nodo = document.getElementById("Total");
            var newText = document.createTextNode(Total);
            Nodo.appendChild(newText);
            
        } //Funcion success
    }); //Ajax
}

function Excel(){
    var sheet_1_data = [{'Nombre':Arreglo[0], 'Nomina':Arreglo[1], 'Area':Arreglo[2],'Planta':Arreglo[3], 'Total': Arreglo[4], 'Ambiente de trabajo': Arreglo[5], 'Condiciones deficientes e insalubres': Arreglo[6], 'Trabajos peligrosos': Arreglo[7], 'Factores propios de la actividad': Arreglo[8], 'Organización del tiempo de trabajo': Arreglo[9], 'Liderazgo y relaciones en el trabajo': Arreglo[10], 'Entorno organizacional': Arreglo[11], 'Condiciones en el ambiente de trabajo': Arreglo[12], 'Carga de trabajo': Arreglo[13], 'Falta de control sobre el trabajo': Arreglo[14], 'Jornada de trabajo': Arreglo[15], 'Interferencia en la relación trabajo-familia': Arreglo[16] , 'Liderazgo':Arreglo[17] , 'Relaciones en el trabajo':Arreglo[18] , 'Violencia':Arreglo[19] , 'Reconocimiento del desempeño':Arreglo[20] , 'Insuficiente sentido de pertenencia e, inestabilidad':Arreglo[21]},
                        /*{Total:2, Subtotal:22}*/];
    var sheet_2_data = [{Col_One:10, Col_Two:110}, {Col_One:20, Col_Two:220}];
    var opts = [{sheetid:'Sheet One',header:true},{sheetid:'Sheet Two',header:false}];
    var result = alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?', 
    									[opts,[sheet_1_data ,sheet_2_data]]);
}