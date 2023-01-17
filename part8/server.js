const express = require("express");

// express app
const app = express();

app.set("view engine", "ejs");
// listen for requests
app.listen(3000);

// after we run this the express does not know what to do next, even if we click the about page link nothing happens
app.use((req, res, next) => {
  console.log("New request is made");
  console.log("host", req.hostname);
  console.log("path", req.path);
  console.log("method", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("in the next");

  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
