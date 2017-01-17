var request = require('request');

module.exports = function requestJson(url, callback){
   request(url, function (error, response) {
      if (error) {
         callback(error); 
      } else {
         try{
            var answer = JSON.parse(response.body);
            callback(null, answer);
         } catch(error) {
            callback(error);
         }
      }
   });
}

// requestJson("http://api.open-notify.org/iss-now.json", function(err, result){
//   if(err){
//       console.log("this is error", err);
//   } else {
//       console.log("this is result", result);
//   }
// });