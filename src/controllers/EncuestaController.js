const Controller = {};
const express = require('express'); //guardar express en una variable de servidor


//INSERT
Controller.GuardarEncuesta = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.log("Conexion: " + err)
        }
        const data = req.body; //TRAE TODO EL OBJETO
        console.log(Object.values(data));
        var sql = "INSERT INTO encuesta (name, address) VALUES ?";
       /* var values = [
            ['John', '123', 'Morelos', '1'],
            ['Peter', 'Lowstreet 4'],
            ['Amy', 'Apple st 652']
        ];  */
 
        //(Nombre,Nomina,Planta,Pregunta1,Pregunta2,Pregunta3,Pregunta4,Pregunta5,Pregunta6,Pregunta7,Pregunta8,Pregunta9, Pregunta10)
        conn.query('INSERT INTO encuesta values ?', [Object.values(data)], (err, ot) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error al registrar despacho de herramienta' + err);
            }
        });
    });
};



///////// == Empleado == ////////////////////////////// == Empleado == ////////////////////////////// == Empleado == ////////////////////////// == Empleado == //////////////////// == Empleado == 
Controller.search = (req, res) => {
    req.getConnection((err, conn) => {

        const {Nomina} = req.params;
        conn.query("SELECT * FROM encuesta WHERE Nomina = '"+Nomina+"'", (err, data) => {
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




