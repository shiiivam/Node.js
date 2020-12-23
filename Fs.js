const fs = require('fs')

//Read File

fs.readFile('calc.js','utf8',(err,data)=>{
    console.log(data);
})


//Write To a file. Note : Deletes previous content

// fs.writeFile('calc.js','console.log("Hello from write")',(err,data)=>{
//     console.log("Done");
// })


//Append in a file

// fs.appendFile('calc.js','Appended text',(err)=>{
//     console.log('Appended successully');
// })


//Delete a file

// fs.unlink('calc.js',(err)=>{
//     console.log("File deleted");
// })