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


router.post('/GuardarEncuesta', EncuestaController.GuardarEncuesta);
router.get('/TablaM/:Variable', EncuestaController.TablaM);

module.exports = router;
