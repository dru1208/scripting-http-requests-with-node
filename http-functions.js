var https = require('https');

var dataStored = ""

module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function(chunk){
    chunk.setEncoding("utf8");
    chunk.on('data', function(data) {
      dataStored += data;
    })
    chunk.on('end', function(){
      callback(dataStored);
    })
  })
};