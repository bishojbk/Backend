const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content", "text/html");

  fs.readFile("./html/index.html", (err, data) => {
    if (err) {
      console.log("Error");
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
