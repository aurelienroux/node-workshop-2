var synonyms = require("./library/synonyms");
var prompt = require("prompt");
var colors = require("colors");

var syn = new synonyms("1561f3a1c44b595e8fe6cd30e1bb1f14");

prompt.start();
prompt.get("userWord", function(err, promptResult){
    if(err){
        console.log("this is prompt err" + err);
    } else {
        syn.getSynonyms(promptResult.userWord, function(result){
            var resultArray = result.noun.syn;
            resultArray.forEach(function(ele){
                console.log("A synonym of " + promptResult.userWord.green + " is " + ele.red);
            });
        });
    }
});
