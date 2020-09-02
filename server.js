const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// app.get('/api/', function(req, res) {

//     let salida = {
//         nombre: 'Ernesto',
//         edad: 50,
//         url: req.url
//     }
//     res.json(salida);
// })

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'josé lopez ñuflo'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
})



app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));