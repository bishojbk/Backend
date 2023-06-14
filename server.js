const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content", "text/html");

  let path = "./html/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/home":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/aboutus":
      res.statusCode = 301;
      res.setHeader("Location", "./about");
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
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
