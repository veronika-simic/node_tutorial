const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  /*  console.log(req);
  // set header content type this can be seen in the network
  res.setHeader("Content-Type", "text/html");
  // writen to the browser
  res.write("hello");
  // close browser
  res.end(); */

  // lodash
  const num = _.random(0, 20);
  const greet = _.once(() => {
    console.log("Hi");
  });
  greet();
  console.log(num);

  res.setHeader("Content-Type", "text/html");
  // send html file

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "./about":
      path += "about.html";
      res.statusCode = 200;
      break;
    /* if the page has been moved we want to redirect to about*/
    case "./about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 400;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log("Triggered");
});
