const express = require('express');
const app = express();
const bandsController = require('./controller/bands-controler')
const methodOverride = require('method-override')

app.use(methodOverride('_method'));
app.use('/bands',bandsController);







app.listen(3000, () => {
    console.log('Bands app is listening on port 3000')
});