const Controller = {};
//const express = require('express'); //guardar express en una variable de servidor

//INSERT
Controller.GuardarEncuesta = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.log("Conexion: " + err)
        }
        const data = req.body; //TRAE TODO EL OBJETO
        console.log(Object.values(data));
        var sql = "INSERT INTO encuestaiso (name, address) VALUES ?";
        /* var values = [
            ['John', '123', 'Morelos', '1'],
            ['Peter', 'Lowstreet 4'],
            ['Amy', 'Apple st 652']
        ];  */
 
        //(Nombre,Nomina,Planta,Pregunta1,Pregunta2,Pregunta3,Pregunta4,Pregunta5,Pregunta6,Pregunta7,Pregunta8,Pregunta9, Pregunta10)
        conn.query('INSERT INTO encuestaConfor values ?', [Object.values(data)], (err, ot) => {
            if (err) {
                res.json("Error json: " + err);
                console.log(err);
            }
            else{
                console.log(ot);
            }
        });
    });
};


///////// == Empleado == ////////////////////////////// == Empleado == ////////////////////////////// == Empleado == ////////////////////////// == Empleado == //////////////////// == Empleado == 
Controller.search = (req, res) => {
    req.getConnection((err, conn) => {

        const {args} = req.params;

        var Nomina = args.split('|')[0]; // Fecha inicial
        var Planta = args.split('|')[1]; // Fecha limite

        console.log("Nom: " +Nomina+ " Planta :" +Planta)

        conn.query("SELECT * FROM encuestaConfor WHERE Nomina = '"+Nomina+"' and Planta = '"+Planta+"'", (err, data) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error de lectura');
            }
            res.json(data)
            console.log(data);
        });
    });
};

///////// == Planta == ////////////////////////////// == Planta == ////////////////////////////// == Planta == ////////////////////////// == Planta == //////////////////// == Planta == 
Controller.searchPlanta = (req, res) => {
    req.getConnection((err, conn) => {

        const {Planta} = req.params;
        conn.query("SELECT * FROM encuestaConfor WHERE Planta = '"+Planta+"'", (err, data) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error de lectura');
            }
            res.json(data)
            console.log(data);
        });
    });
};

///////// == Area == ////////////////////////////// == Area == ////////////////////////////// == Area == ////////////////////////// == Area == //////////////////// == Area == 
Controller.searchArea = (req, res) => {
    req.getConnection((err, conn) => {
        
        const {Variable} = req.params;
        Area = Variable.split(' ')[0]; // "Area"
        Planta = Variable.split(' ')[1]; // "Fecha"
        console.log(Area + " " + Planta);
        conn.query("SELECT * FROM encuestaConfor WHERE Area = '" + Area + "' AND Planta = '" + Planta + "'", (err, data) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error de lectura');
            }
            res.json(data)
            console.log(data);
        });
    });
};


module.exports = Controller;




