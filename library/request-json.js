var request = require('request');

module.exports = function requestJson(url, callback){
   request(url, function (error, response) {
      if (error) {
         callback(error); 
      } else {
         try{
            var answer = JSON.parse(response.body);
            callback(null, answer);
         } 
         catch (error) {
            callback(error);
         }
      }
   });
};

