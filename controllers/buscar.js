const BuscarPelicula = require("../models/buscarPelicula");

const buscarPelicula = async (req, res) => {

    const { query, page } = req.query;
    console.log( {query}, {page} );
    const buscarPelicula = new BuscarPelicula();
    const resp = await buscarPelicula.buscarPelicula(query, page);

    return res.json({
        ok: true,
        msg: 'Buscar pelicula',
        ...resp
    });
}


module.exports = {
    buscarPelicula
};