const { Router } = require('express');
const { pelicula } = require('../controllers/pelicula');

const router = Router();

router.get('/:id', [], pelicula);


module.exports = router;