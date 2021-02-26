const { response } = require('express');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const app = express();

//Define paths for express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//Setup static directory to serve
app.use(express.static(publicDirPath));


app.get('', (request, response) => {
    response.render('index', {
        title: 'Home page',
        name: 'Chris Curmi'
    })
});


app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About',
        name: 'Chris Curmi'
    })
});


app.get('/help', (request, response) => {
    response.render('help', {
        title: 'Help page',
        helpMessage: 'This is my help page',
        name: 'Chris Curmi'
    })
});

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return response.send('Address not provided');
    }
    geoCode(req.query.address, (error, {latitude, longitude, name} = {}) => {
        if(error){
            return res.send({
                forecast: 'Invalid',
                address: req.query.address,
                message: 'Invalid path' + error
            });
        }
        else {
            forecast(latitude, longitude, (error, data) => {
                return res.send({
                    forecast: data,
                    name,
                    address: req.query.address
                });
            });
         }
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    }

    res.send({
        products: []
    })

});

app.get('*', (request, response) => {
    response.send('404 page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});