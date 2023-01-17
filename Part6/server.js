const express = require("express");
// express app

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname }); // we need to tell express where this path is relative from so we pass an object, what is this path relative to
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects in express --> redirects and set status code
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page --> this function fires every time if the request gets to this point in code
// here we need to edit status code to 404
app.use((req, res) => {
  res.status(404).sendFile("Part4/views/404.html", { root: __dirname });
});
