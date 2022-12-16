const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (messageFromServer) => {
    console.log(`message from server: ${messageFromServer}`);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // give name to snake in the game
    conn.write("Name: SAM");

  });

  return conn;

};

module.exports = { connect };