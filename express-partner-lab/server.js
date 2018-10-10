const express = require('express');
const app = express();
const Bands = require('./model/bands');


app.get('/', (req, res) => {
    res.send('This is the bands app')
})


app.get('/bands', (req, res) => {
    res.render('index.ejs', {
        bands: Bands
    })
})









app.listen(3000, () => {
    console.log('Bands app is listening on port 3000')
});