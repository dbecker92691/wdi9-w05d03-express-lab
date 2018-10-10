const express = require('express');
const router = express.Router();
const Bands = require('../model/bands');






router.get('/', (req, res) => {
    res.render('index.ejs', {
        bands: Bands
    })
})


router.get('/:id', (req, res) => {
    res.render('show.ejs', {
        bands: Bands[req.params.id]
    })
})


router.delete('/:id', (req, res) => {
    Bands.splice(req.params.id);
    res.redirect('/bands');
})







module.exports = router;