const request = require("request");

const WEATHERSTACK_API_KEY = "c0f95c43b26edd8f79e7629575c7aec0";

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${latitude},${longitude}`;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback("forecast: unable to connect", undefined);
        } else if (body.error) {
            callback("forecast: unable to get location", undefined);
        } else {
            callback(
                undefined,
                `${body.location.name} current temp is: ${body.current.temperature}ºC`
            );
        }
    });
};

module.exports = forecast;
