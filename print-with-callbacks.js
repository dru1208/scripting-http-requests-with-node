var https = require('https');

var dataStored = "";

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function(chunk){
    chunk.setEncoding("utf8");
    chunk.on('data', function(data) {
      dataStored += data;
    })
    chunk.on('end', function(){
      callback(dataStored);
    })
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);