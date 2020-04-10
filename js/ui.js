class GUI {
    //no esta bueno tener un constructor muy cargado
    constructor(){
        this.init();


    }


    init(){
        this.construirSelect();
    }


    construirSelect(){

        cotizador.obtenerMonedasAPI()
        .then(monedas =>{
            //esto retorna una arreglo
            const select = document.getElementById('criptomoneda');
            for(const[key, value] of Object.entries(monedas.monedas.Data)){
                //añadir el symbol y el nombre como opciones
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;

                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);

            }
            
              

        })

        //lo anterior es un objeto de objetos, no es un arreglo.
        //entonces no podemos usar forEach

    }
    
    
    
    mostrarMensaje(mensaje,clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        
        divMensaje.appendChild(div);


        //mostrar contenido
        setTimeout(()=>{
            
            document.querySelector('.mensajes div').remove();

        },3000);
    }


    //imprime el resultado de la cotizacion

    mostrarResultado(resultado, moneda, cripto){
        console.log(resultado[cripto][moneda]);
    
        const datosMoneda = resultado[cripto][moneda];
    //construir el template
    let htmlTemplate = `
    <div class="card bg-warning">
        <div class="card-body text-light">
            <h2 class="card-title">Resultado: </h2>
            <p>El precio de: ${datosMoneda.FROMSYMBOL} en la moneda: ${datosMoneda.TOSYMBOL}
            es de: $${datosMoneda.PRICE.toFixed(7)}
            </p>
            <p>
            La ultima actualizacion es de: ${new Date(datosMoneda.LASTUPDATE * 1000)}
            </p>
        </div>
    </div>
    
    
    `;
    
    this.mostrarSpinner();
    
    setTimeout(()=>{
        this.ocultarSpinner();
        document.querySelector('#resultado').innerHTML = htmlTemplate;
        
    },3000)
    //insertar el resultado
    
    
    }


    mostrarSpinner(){
        const spinner = document.querySelector('.spinner > div');
        spinner.style.display = 'block';
        

}

ocultarSpinner(){
    const spinner = document.querySelector('.spinner > div');
    spinner.style.display = 'none';
    

}
}