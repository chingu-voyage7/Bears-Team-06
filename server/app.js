const app = require("./server");
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");

const io = socketIO(server);

//For loading the sockets
require("./sockets/groupchat")(io);
require("./sockets/globalroom")(io);
require("./sockets/privatemessage")(io);

// Set Variable called port according to "development" / "production"
if (process.env.NODE_ENV === "production") {
  app.set("port", process.env.PORT || 80);
} else {
  app.set("port", 8080);
}

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // if not https redirect to https unless logging in using OAuth
  app.use(express.static("../src/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "build", "index.html"));
  });
}

server.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
