const axios = require('axios');
require('dotenv').config();

class ObtenerPeliculas {

    constructor(){
        console.log('instancia ObtenerPeliculas creada');
    }

    async ultimas( page = 1 ) {
        let resp;
        try {
            const instance = axios.create({
                baseURL: `${ process.env.URL }/movie/now_playing?api_key=${ process.env.API_KEY }&language=es-ES&page=${ page }`
            });
            resp = await instance.get();
            resp.data.ok = true;
            return resp.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async mejorCalificadas( page = 1 ) {
        let resp;
        try {
            const instance = axios.create({
                baseURL: `${ process.env.URL }/movie/top_rated?api_key=${ process.env.API_KEY }&language=es-ES&page=${ page }`
            });
            resp = await instance.get();
            resp.data.ok = true;
            return resp.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async populares( page = 1 ) {
        let resp;
        try {
            const instance = axios.create({
                baseURL: `${ process.env.URL }/movie/popular?api_key=${ process.env.API_KEY }&language=es-ES&page=${ page }`
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



module.exports = ObtenerPeliculas;