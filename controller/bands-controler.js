const express = require('express');
const router = express.Router();
const Bands = require('../model/bands');



router.get('/', (req, res) => {
    res.send('This is the bands app')
})


router.get('/bands', (req, res) => {
    res.render('index.ejs', {
        bands: Bands
    })
})


router.get('/bands/:id', (req, res) => {
    res.render('show.ejs', {
        bands: Bands[req.params.id]
    })
})










module.exports = router;