const express = require('express');//guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const EncuestaController = require('../Controllers/EncuestaController');

var reinicio = router.get('/', (req, res) => {
    //res.send('holoo');
    res.render('index.html');
});

router.get('/Reporte', (req, res) => {
    //res.send('holoo');
    res.render('Reporte.html');
});

router.get('/Area', (req, res) => {
    //res.send('holoo');
    res.render('ReporteArea.html');
});

router.get('/Planta', (req, res) => {
    //res.send('holoo');
    res.render('ReportePlanta.html');
});


router.post('/GuardarEncuesta', EncuestaController.GuardarEncuesta);
router.get('/Empleado/:Nomina', EncuestaController.search);
router.get('/RPlanta/:Planta', EncuestaController.searchPlanta);
router.get('/RArea/:Variable', EncuestaController.searchArea);
//router.get('/BuscarHerramientas/:Herra', AlmacenController.search);
module.exports = router;
