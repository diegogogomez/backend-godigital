const axios = require('axios');
require('dotenv').config();

class ObtenerPelicula {

    constructor(){
        console.log('instancia ObtenerPelicula creada');
    }

    async obtenerPelicula( idPelicula ) {
        let resp;
        try {
            const instance = axios.create({
                
                // https://api.themoviedb.org/3/movie/{movie_id}?api_key=b3376359ff06c41f2b1c1d48d734d5f7&language=en-US
                baseURL: `${ process.env.URL }/movie/${ idPelicula }?api_key=${ process.env.API_KEY }&language=es-ES`
            });
            resp = await instance.get();
            resp.data.ok = true;
            return resp.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}



module.exports = ObtenerPelicula;