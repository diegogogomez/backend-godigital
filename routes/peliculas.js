const { Router } = require('express');
const { ultimasPeliculas,
    populares,
    mejorCalificadas } = require('../controllers/peliculas');

const router = Router();

router.get('/ultimas', [], ultimasPeliculas);

router.get('/mejor-calificadas', [], mejorCalificadas);

router.get('/populares', [], populares);



module.exports = router;