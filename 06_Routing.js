const fs = require('fs');
const http = require('http');
const url = require('url');


//SERVER
const server = http.createServer((req, res) =>{
    console.log(req.url);

    const pathName = req.url;
    if(pathName === '/prueba'){
        res.end("Esto es una prueba de enrutado");
    } else if (pathName === '/product'){
        res.end("Esto es un producto");
    } else{
        res.writeHead(404, {
            "content-type" : 'text/html'
        }),
        res.end("<h1>Pagina no encontrada</h1>");
    }

    
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to request on port 8000')
});