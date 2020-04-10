const cotizador = new API('a0e7972269b6608731f222cd7cf1f1cae46f79e6f9c62e0be7f3c86be532533c');
const ui = new GUI();

//leer el formulario

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
    
    //criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    

    //validar formulario
    if(criptoMonedaSeleccionada==='' || monedaSeleccionada===''){
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center')
    }else{
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
        .then(data=>{
            ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);


        })
    }


})
