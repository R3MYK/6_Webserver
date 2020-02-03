const express = require('express');
const app = express();

app.get('/', function (req, res) {
    // res.send('Hello World')
    let salida = {
        nombre: 'Nicolas',
        edad: 31,
        url: req.url
    };
    res.send(salida);
});
app.get('/data', function (req, res) {
    res.send('Hello Data')
    // let salida = {
    //     nombre: 'Nicolas',
    //     edad: 31,
    //     url: req.url
    // };
    // res.send(salida);
});

app.listen(3000, ()=> {
    console.log('Escuchando peticiones del puerto 3000')
});