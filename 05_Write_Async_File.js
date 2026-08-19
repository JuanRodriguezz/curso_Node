const fs = require('fs');

fs.writeFile('./files/ArchivoGenerado_Async_001.txt', `Archivo generado en la fecha ${Date(Date.now())}`, 'utf-8', (error, data)=>{
    console.log("Archivo creado")
});

fs.readFile('./files/ArchivoGenerado_Async_001.txt', 'utf-8', (error, data1)=>{
    console.log(data1)
});