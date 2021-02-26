const request = require('postman-request');

const getForecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f07b1dd740cb5c22cc73a205d5c2d725&query=' + longitude +','+ latitude;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error);
        } else if (response.body.error) {
            callback('Unable to find location');
        } else {
            const data = response.body;
            callback(undefined, response.body.current.weather_descriptions[0] + '...It is currently ' +
                data.current.temperature +
                ' degrees and feels like ' +
                data.current.feelslike + ' degrees');
        }
    })
};

module.exports = getForecast;