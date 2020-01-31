// llamada a http
const http = require('http');
// creando servidor
http.createServer((req, res) => {
    // res.write('Hola Mundo');
    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Nicolas',
        edad: 31,
        url: req.url
    };
    res.write(JSON.stringify(salida));
    res.end();
})
    //Escuchando al puerto
    .listen(8080);
console.log('Escuchando el puerto 8080');