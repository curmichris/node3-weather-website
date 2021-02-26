const request = require('postman-request');

const getGeoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2hyaXNraWtrIiwiYSI6ImNrbGpuMHBoODA5bDAycXA1azJxbHhmaGsifQ.0-O8msf-Vp1D16ZkpRfuBw';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services');
        } else if (response.body.features.length == 0) {
            callback('Unable to connect to location. Try another search');
        } else {
            const data = response.body.features[0];
            const responseCallback = {
                latitude: data.center[0],
                longitude: data.center[1],
                name: data.place_name
            };

            callback(undefined, responseCallback);
        }
    });
};

module.exports = getGeoCode;