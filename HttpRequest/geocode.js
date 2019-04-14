const request = require('request');
const yargs = require('yargs').argv;


let adrss = yargs.direccion;

//console.log(adrss);
// request('www.google.com',(error,response,body)=>{
//     console.log('error',error)
//     console.log('statusCode', response && response.statusCode);
//     console.log('body',body);

// });

   
    let apiKey = '<MyApiKey>'; //you need API Key to use this API from google geocode 
    let options = {
        url: 'https://maps.googleapis.com/maps/api/geocode/json?',
        json: true,
        method:'POST',
        body:adrss,
        qs:{
            address: adrss,
            //key: apiKey // few querys per day please
        }
    }

//to Run in command Line node geocode.js --direccion='any adress'
// example --direccion='plaza garibaldi,mexico'

request(options,(error,response,body)=>{
    if(error){
        console.log('Servicio no disponible');
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('No hay datos a mostrar');
    }else if(body.status === 'OK'){
        // console.log(JSON.stringify(body, undefined, 1));// indentation
        console.log(JSON.stringify(`Ubicación: ${body.results[0].formatted_address}`));
        console.log(JSON.stringify(`Latitud: ${body.results[0].geometry.location.lat}`));
        console.log(JSON.stringify(`Longitud: ${body.results[0].geometry.location.lng}`));
    }    
});