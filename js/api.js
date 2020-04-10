class API{

    constructor(apikey){
        this.apikey = apikey;

    }

    //obtener todas las monedas
    async obtenerMonedasAPI(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;


        //fetch a la api
        const urlObtenerMonedas = await fetch(url);


        //respuesta en JSON
        const monedas = await urlObtenerMonedas.json();


        return {
            
            monedas
        };
    }

    async obtenerValores(moneda, cripto){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}&api_key=${this.apikey}`
        
        //consultar en la REST API
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return {
            resultado
    
        }
    }
}