const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let user = os.hostname();

/*
console.log(cpu);
console.log(sistema);
console.log(user);
*/

let cpu_str = JSON.stringify(cpu);

let content = "hello world from File in NodeJS and FileSystem Module";

fs.appendFile("hello.txt",content,function(error){
    if(error){
        console.log("Error creating file!");
    }
});

//to save os information content in a file

fs.appendFile("osInfo.txt",`String templates: ${cpu_str}`,function(error){
    if(error){
        console.log("Error creating file!");
    }
});


