const fs = require('fs');

const textin = fs.readFileSync('./files/prueba.txt', 'utf-8')
console.log(textin);