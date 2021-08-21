const axios = require('axios');
require('dotenv').config();

class BuscarPelicula {

    constructor(){
        console.log('instancia BuscarPelicula creada');
    }

    async buscarPelicula( palabraClave, page = 1 ) {
        let resp;
        try {
            const instance = axios.create({
                
                // localhost:3000/api/buscar?api_key=b3376359ff06c41f2b1c1d48d734d5f7
                        // &language=es-ES&query=spid&page=1&include_adult=false
                baseURL: `${ process.env.URL }/search/movie?api_key=${ process.env.API_KEY }&language=es-ES&query=${ palabraClave }&page=${ page }&include_adult=false`
            });
            resp = await instance.get();
            console.log(resp.data)
            resp.data.ok = true;
            return resp.data;
        } catch (error) {
            console.log('error');
            return [];
        }
    }
}



module.exports = BuscarPelicula;