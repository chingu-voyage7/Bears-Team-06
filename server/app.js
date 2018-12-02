const app = require("./server");
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");

const io = socketIO(server);

//For loading the sockets
require("./sockets/groupchat")(io);

// Set Variable called port according to "development" / "production"
if (process.env.NODE_ENV === "production") {
  app.set("port", process.env.PORT || 80);
} else {
  app.set("port", 8080);
}

server.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
