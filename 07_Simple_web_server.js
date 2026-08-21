const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Hello from the server!'); //Respuesta enviada del servidor al usuario
});

//Puerto donde se inicializa el server
//localhost
server.listen(8000, '127.0.0.1', ()=>{
    console.log('Escuchando la solicitud desde el puero 8000')
});