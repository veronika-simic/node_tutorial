const express = require("express");
// express app

const app = express();

// register view engine by defulat it will look for it in the views folder

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "Whats new in JS", snippet: "Lorem ipsum" },
    { title: "Whats new in CSS", snippet: "Lorem ipsum" },
    { title: "Whats new in HTML", snippet: "Lorem ipsum" },
  ];
  res.render("index", { title: "Home", blogs }); // we need to tell express where this path is relative from so we pass an object, what is this path relative to
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Blog" });
});
// 404 page --> this function fires every time if the request gets to this point in code
// here we need to edit status code to 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
