var requestJSON = require('./library/request-json');

requestJSON("https://api.darksky.net/forecast/8b3d826a8192d73fe0d71085a9b2ab06/37.8267,-122.4233", function(err, result){
   if(err){
      console.log("this is error", err);
   } else {
      console.log("this is result", result);
   }
});

// console.log(myfile);