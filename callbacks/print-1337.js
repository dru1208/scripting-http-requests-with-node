var getHTML = require('../http-functions.js')

var singleLetter = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7'}
var multipleLetters = {'ck' : 'x', 'er' : '0r', 'you' : 'j00'
}

var changer = function(input) {
  var new_input = ""
  for (var letter of input) {
    for (var key in Object.keys(singleLetter)) {
      if (letter === key) {
        new_input += singleLetter[key]
      } else {
        new_input += letter
      }
    }
  } return new_input
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function print1337 (html) {

  /* Write your code here! */
  console.log(change(html));
}

getHTML(requestOptions, changer);



