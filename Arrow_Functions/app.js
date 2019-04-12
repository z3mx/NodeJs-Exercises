const my = require('./my_module');

//my.saludo();//1

let response = my.sumar(10,3)//2
console.log(response);//2

response = my.show(4);//3
console.log(response);//3


//Timmers this operation is executed only once and for print in the screen takes 5 seconds
setTimeout(()=>{
    console.log("z3mx");
},5000);