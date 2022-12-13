// connect function from client.js file
const connect = require("./client.js");


console.log("Connecting...");
connect();

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  //event listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
}

// callback function to handle user input
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
}

setupInput();
