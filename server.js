const express = require('express');
const app = express();
const bandsController = require('./controller/bands-controler')


app.use('/',bandsController);







app.listen(3000, () => {
    console.log('Bands app is listening on port 3000')
});