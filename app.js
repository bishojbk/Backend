const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>HELLO F</p>");
  res.sendFile("./html/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<p>HELLO EJR</p>");
  res.sendFile("./html/about.html", { root: __dirname });
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page // must be in bottom of the app
app.use((req, res) => {
  res.status(404).sendFile("./html/404.html", { root: __dirname });
});
