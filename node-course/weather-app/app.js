const getGeoCode = require('./utils/geocode');
const getForecast = require('./utils/forecast');
const { isFunction } = require('util');

const location = process.argv[2];
if(location != undefined){
    getWeather(location);
}

function getWeather(location) {
    getGeoCode(location, (error, {data}) => {
        if (error) {
            return console.log(error)
        } else {
            //console.log(data); 
            getForecast(data.latitude, data.longitude, (error, data) => {
                if (error) {
                    return console.log(error)
                } else {
                    console.log(data);
                };
            });
        };
    });
}


// getForecast(-75.7088, 44.1545, (error, data) => {
//     if (error) {
//         console.log(error)
//     } else { 
//         console.log(data); 
//     };
//   })





// const url = 'http://api.weatherstack.com/current?access_key=f07b1dd740cb5c22cc73a205d5c2d725&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log(error);
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         const data = response.body;
//         console.log(response.body.current.weather_descriptions[0] + '...It is currently ' +
//             data.current.temperature +
//             ' degrees and feels like ' +
//             data.current.feelslike + ' degrees');
//     }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


