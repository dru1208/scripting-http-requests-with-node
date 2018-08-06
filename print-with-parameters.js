var https = require('https')

var dataStored = ""

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function(chunk){
    chunk.setEncoding("utf8");
    chunk.on('data', function(data){
      dataStored += data;
    });

    chunk.on('end', function(){
      console.log(dataStored);
    })
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);