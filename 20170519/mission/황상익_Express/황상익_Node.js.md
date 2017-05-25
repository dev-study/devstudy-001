## Node.js

1. Installation on MacOS
  <p><code> $ n 7.10.0
  </code></p>
  
2. module.exports Vs exports.funcName by File.js

__module.exports__
  
  ~~~~
  speaker.js
  
  module.exports = function(saying){      
	  console.log("father sais :" + saying);
  }
  ~~~~
  
  ~~~~
  person.js
  
  var saying = require('./speaker');  // speaker : file name
  
  saying("Hello World.");
  ~~~~
  
  __exports.funcName__
  
  ~~~~
  new_speaker.js
  
  exports.whisper = function(saying) {
    console.log("whisper : " + saying);
  }
  
  exports.loud = function(saying) {
    console.log("LOUD :" + saying);
  }
  
  ~~~~
  
  ~~~~
  new_person.js
  
  var new_speaker = require('./new_speaker');
  
  new_speaker.whisper("small talk.");
  new_speaker.loud("LOUD SOMETHING");
  
  ~~~~
  
  3. NPM
  
  [1] www.npmjs.com  : public packages
  
  [2] usage :
  
		$ npm init
		$ npm install
		$ npm update
		$ npm prune
		
  
