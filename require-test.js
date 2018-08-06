var getHTML = require("./http-functions.js")

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


var printHTML = function (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
