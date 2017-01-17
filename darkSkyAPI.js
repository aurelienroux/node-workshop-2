var prompt = require("prompt");
var requestJSON = require('./library/request-json');
var colors = require("colors");
var emoji = require("node-emoji");

prompt.start();
prompt.get("userLocation", function (err, userResult) {
    if(err){
        console.log("prompt error is:", err);
    } else {
        console.log("your location is: " + userResult.userLocation);
        requestJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + userResult.userLocation, function(errReqOne, resultReqOne){
            if(errReqOne){
                console.log("this is user location error" + errReqOne);
            } else {
                var userLat = resultReqOne.results[0].geometry.location.lat;
                var userLng = resultReqOne.results[0].geometry.location.lng;
                requestJSON("https://api.darksky.net/forecast/8b3d826a8192d73fe0d71085a9b2ab06/" + userLat + "," + userLng, function(errReqTwo, resultReqTwo){
                    if(errReqTwo){
                        console.log("this is weather app error" + errReqTwo);
                    } else {
                        var dailyWeatherData = resultReqTwo.daily.data;
                        console.log("Weather is actually ".america + resultReqTwo.currently.summary);
                        for(var i = 0; i < 5;i++){
                            console.log("In " + (i+1) + " days, weather will be " + dailyWeatherData[i].icon.rainbow);
                        }
                    }
                });//end of weather request
            }
        }); // end of city request
    }// end of else prompt
});// end of prompt