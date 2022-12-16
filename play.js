// connect function from client.js file
//setupInput function from input.js file
const { connect } = require("./client.js");
const { setupInput } = require("./input");

console.log("Connecting...");

setupInput(connect());
