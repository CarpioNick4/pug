const express = require('express');
const madrid = require('./json/madrid.json'); //Copia il file people.json dentro la variabile people
const barca = require('./json/barca.json');


const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('index', {
    title: 'Homepage',
    rMadrid:madrid['Real Madrid'],
    barcelona:barca.Barcelona
    });
});

app.get('/madrid', (req, res) => {
    res.render('squadre', {
    title: 'THE REAL MADRID',
    squadra:madrid['Real Madrid']
    });
});

app.get('/barca', (req, res) => {
    res.render('squadre', {
    title: 'THE BARCELONA',
    squadra:barca.Barcelona
    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});