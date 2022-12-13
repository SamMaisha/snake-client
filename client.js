const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (messageFromServer) => {
    console.log(`message from server: ${messageFromServer}`)
  })
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // give name to snake in the game
    conn.write("Name: SAM")
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 2000);
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 3000);

  })


  return conn;

};

module.exports = { connect };