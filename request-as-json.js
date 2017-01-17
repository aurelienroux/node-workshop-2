var requestJSON = require('./library/request-json');

requestJSON("http://api.open-notify.org/iss-now.json", function(err, result){
   if(err){
      console.log("this is error", err);
   } else {
      console.log("this is result", result);
   }
});

// console.log(myfile);