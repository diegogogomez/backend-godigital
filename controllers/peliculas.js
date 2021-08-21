const ObtenerPeliculas = require("../models/obtenerPeliculas");


const ultimasPeliculas = async (req, res) => {
    
    const { page } = req.query;
    
    const obtenerPeliculas = new ObtenerPeliculas();
    
    const resp = await obtenerPeliculas.ultimas(page);

    // Verifica status 200 respuesta
    if(resp.ok) {
        console.log('todo bien');
        return res.json({
            ok: true,
            msg: 'Mostrar ultimas peliculas',
            ...resp
        });
    } else {        
        console.log('Error en la respuesta del servidor');
        return res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }

}

const mejorCalificadas = async (req, res) => {

    const { page } = req.query;

    const obtenerPeliculas = new ObtenerPeliculas();
    
    const resp = await obtenerPeliculas.mejorCalificadas(page);

    // Verifica status 200 respuesta
    if(resp.ok) {
        console.log('todo bien');
        return res.json({
            ok: true,
            msg: 'Mostrar mejores peliculas',
            ...resp
        });
    } else {        
        console.log('Error en la respuesta del servidor');
        return res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }
}

const populares = async (req, res) => {

    const { page } = req.query;

    const obtenerPeliculas = new ObtenerPeliculas();
    
    const resp = await obtenerPeliculas.populares(page);

    // Verifica status 200 respuesta
    if(resp.ok) {
        console.log('todo bien');
        return res.json({
            ok: true,
            msg: 'Mostrar peliculas populares',
            ...resp
        });
    } else {        
        console.log('Error en la respuesta del servidor');
        return res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }
}


module.exports = {
    ultimasPeliculas,
    mejorCalificadas,
    populares
}