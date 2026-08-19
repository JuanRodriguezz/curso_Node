const fs = require('fs');

const newText = 'Prueba de que se creo este texto por JS en la fecha de: ' + Date(Date.now())

fs.writeFileSync('./files/ArchivoGenerado_001.txt', newText);