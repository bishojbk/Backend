const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server created");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
