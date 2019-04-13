const yargs = require('yargs').argv;//only argv 

console.log(yargs);

//to run in comandline $ node ya.js --usuario=z3mx

if(yargs.usuario=="z3mx"){
    console.log("Working properly");
}else{
    console.log("something wen't wrong");
}