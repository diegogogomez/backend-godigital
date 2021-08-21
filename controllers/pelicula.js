const ObtenerPelicula = require("../models/obtenerPelicula");

const pelicula = async (req, res) => {

    const { id } = req.params;

    const obtenerPelicula = new ObtenerPelicula;
    
    const resp = await obtenerPelicula.obtenerPelicula(id);

    console.log(resp);
    
    return res.json({
        ok: true,
        msg: 'Pelicula especifica',
        ...resp
    });

}

module.exports = {
    pelicula
};