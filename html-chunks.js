var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(chunk) {
    chunk.setEncoding('utf8')
    chunk.on('data', function(data) {
      console.log(data, "\n")
    });
  });
}

getAndPrintHTMLChunks();