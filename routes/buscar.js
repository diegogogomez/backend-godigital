const { Router } = require('express');
const { buscarPelicula } = require('../controllers/buscar');

const router = Router();

router.get('/', [], buscarPelicula);


module.exports = router;