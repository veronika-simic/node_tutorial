const express = require("express");

// express app

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.send("<p>Home page</p>");
  res.sendFile("./part4/views/index.html", { root: __dirname }); // we need to tell express where this path is relative from so we pass an object, what is this path relative to
});

app.get("/about", (req, res) => {
  res.send("<p>About page</p>");
  res.sendFile("./part4/views/about.html", { root: __dirname });
});
