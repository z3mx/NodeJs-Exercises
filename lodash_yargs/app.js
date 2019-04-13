const _ = require('lodash');


let x = {"nombre":"z3mx"}
let y = {"age" : "32"}
let z = [
    {name:"Tony",lastname:"Stark",nickname:"IronMan"},
    {name:"Thor",lastname:"Asgard",nickname:"God of Thunder"},
    {name:"Bruce",lastname:"Banner",nickname:"Hulk"},
    {name:"Captain",lastname:"America",nickname:"Cap"}
]


// let result = _.assign(x,y);  //join JSON's
// console.log(result);

// _.times(3,()=>console.log("Follow me @ElTotoVargas!"));  //bucle

// result = _.find(z,{nickname:"IronMan"}); //method to find in array of JSON's
// console.log(result); 



// comando = process.argv;
// console.log(comando);

//to run in commandline $ node app.js z3mx
if(process.argv[2]==="z3mx"){
    console.log("please gohead ->");
}else{
    console.log("403 Forbiden Unauthorized user");
}