const fs = require('fs');
const http = require('http');
const url = require('url');


const data = fs.readFileSync(`${__dirname}/files/data.json`, 'utf-8');
const productData = JSON.parse(data);


//SERVER
const server = http.createServer((req, res) =>{
    console.log(req.url);

    const pathName = req.url;
    if(pathName === '/prueba' || pathName === '/'){
        res.end("Esto es una prueba de enrutado");
    } else if (pathName === '/api'){
        res.writeHead(200, {"content-type": "application/json"})
        res.end(data)
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