//console.log("My own Module");//0.-

let someValue = 500;//1.-

function saludo(){ //2.-
    console.log("Regards from a NodeJs Function on my own module");
}

///for access to those variables you need use export module
//module.exports.someValue = someValue;//1.-

//module.exports.saludo = saludo();//2

/*module.exports.saludo = function(){
    console.log("Regards from a NodeJs Function on my own module 3.-");
}*///3

module.exports  = {
    someValue : someValue,
    saludo : function(){
        console.log("module.exports {} JSON");
    }
}//4