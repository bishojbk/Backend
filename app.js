const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "html");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page // must be in bottom of the app
app.use((req, res) => {
  res.render("404");
});
