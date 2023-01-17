const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
//connect to mongo DB
const dbURI =
  "mongodb+srv://netninja:test1234@cluster0.p0xsfct.mongodb.net/node-tutorial";

// express app
const app = express();
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
app.set("view engine", "ejs");
// listen for requests

app.use(morgan("dev")); // third party middleware

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2 ",
    snippet: "about me",
    body: "more about me ",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    }); // saves blog to database
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
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
