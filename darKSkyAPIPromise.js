var promptPromise = require("prompt-promise");
var googMapAPI = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var requestPromise = require("request-promise");
var parseUserData, userCoordinates, weatherData, parseWeatherData;
var colors = require("colors");

function getUserLoc(userLoc){
    return (googMapAPI + userLoc);
}

function getUserData(info){
    var data = requestPromise(info);
    return data;
}

function getParseUserData(data){
    parseUserData = JSON.parse(data);
    userCoordinates = parseUserData.results[0].geometry.location;
    return userCoordinates;
}

function getWeatherData(userCoordinates){
    weatherData = requestPromise("https://api.darksky.net/forecast/8b3d826a8192d73fe0d71085a9b2ab06/" + userCoordinates.lat + "," + userCoordinates.lng);
    return weatherData;
}

function getParseWeatherData(weatherData){
    parseWeatherData = JSON.parse(weatherData);
    return parseWeatherData;
}

function display(generalData){
    console.log("Weather is actually", generalData.currently.summary.bgBlue);
    console.log("Daily summary:", generalData.daily.summary.bgRed);
    for(var i = 0; i < 5; i++){
        console.log("In " + (i+1) + " days, the weather will be " + generalData.daily.data[i].summary.bgGreen);
    }
}

function theWeather(){
    promptPromise("Where are you ? ")
    .then(getUserLoc)
    .then(getUserData)
    .then(getParseUserData)
    .then(getWeatherData)
    .then(getParseWeatherData)
    .then(display)
    .catch( err => console.log(err) );
}

theWeather();
