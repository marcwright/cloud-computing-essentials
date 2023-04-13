const express = require('express');

const app = express();
const pokemon = require('./models/pokemon');

const PORT = process.env.PORT || 3000;

//index
app.get('/', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})


console.log(`App is running on port ${PORT}`);

app.listen(PORT);
