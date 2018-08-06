var https = require('https');

var dataStored = ""

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(chunk){
    chunk.setEncoding("utf8");
    chunk.on('data', function(data){
      dataStored += data;
    });

    chunk.on('end', function(){
      console.log(dataStored);
    })
  });
};

getAndPrintHTML();