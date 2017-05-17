// var requirejs = require('requirejs')
//
// requirejs.config({
//     //Pass the top-level main.js/index.js require
//     //function to requirejs so that node modules
//     //are loaded relative to the top-level JS file.
//     nodeRequire: require
// });
//
// requirejs(['annyang'], function(Anyang) {
  if (annyang) {

    // Let's define a command.
    var commands = {
      'hello': function() { console.log('Hello world!'); }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
// })
