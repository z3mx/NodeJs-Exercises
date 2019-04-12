const fs = require('fs');

/***************************************************************/
//Creating file
/*let content = "\n adding second line to file with NodeJS!"

fs.appendFile("data.txt", content, function (error) {
    if (error) {
        console.log("Error creating file!");
    } else {
        console.log("File created");
    }
});

/****************************Sync Function***********************/
  /*  console.log("init");

    fs.readFile('data.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log(`Error ${error}`);
        } else {
            console.log(data);
        }
    });
    console.log("endprocess");

/****************************Async Function***********************/
/*console.log("init process 2");

let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);
console.log("endprocess 2");

/****************************rename file Function***********************/

fs.rename('data2.txt','renamed.txt',(error)=>{
    if (error) throw error;
    console.log("File Renamed!");
});

/****************************delete file Function***********************/

/*fs.unlink('data.txt', (error) => {
    if (error) throw error;
    console.log("File Deleted!");

});
/****************************delete file Function***********************/