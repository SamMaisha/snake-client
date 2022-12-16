// Stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
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
  // key to exit
  if (key === '\u0003') {
    process.exit();
  }
  // keys to move
  if (key === 'w' || key === 'W') {
    connection.write("Move: up");

  }
  if (key === 'a' || key === 'A') {
    connection.write("Move: left");
  }
  if (key === 's' || key === 'S') {
    connection.write("Move: down");
  }
  if (key === "d" || key === 'D') {
    connection.write("Move: right");
  }
  // keys to speak
  if (key === 'f' || key === 'F') {
    connection.write("Say: U DED");
  }
  if (key === 'g' || key === 'G') {
    connection.write("Say: BYEEE");
  }
  if (key === 'h' || key === 'H') {
    connection.write("Say: WEEE!!");
  }

}

module.exports = { setupInput };