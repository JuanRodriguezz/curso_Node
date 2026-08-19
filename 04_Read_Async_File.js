const fs = require('fs');

fs.readFile('./files/prueba.txt', 'utf-8', (error, data)=>{
    console.log(data);
});

console.log("Leeremos el archivo primero");

//Using the information in the file to open another file

fs.readFile('./files/prueba.txt', 'utf-8', (error, data1)=>{
    fs.readFile(`./files/${data1}.txt`, 'utf-8', (error, data2)=>{
        console.log(data2)
    })
});
