var requestJSON = require('./request-json');

function SynonymAPI(key){
    this.key = key;
}

SynonymAPI.prototype.getSynonyms = function (word, callback){
    requestJSON("http://words.bighugelabs.com/api/2/" + this.key + "/" + word + "/json", function(err, response){
        if(err){
            console.log("this is requestJSON error ", err);
        } else {
            callback(response);
        }
    });
};

module.exports = SynonymAPI;
