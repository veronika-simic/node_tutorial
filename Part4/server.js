const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  /*  console.log(req);
  // set header content type this can be seen in the network
  res.setHeader("Content-Type", "text/html");
  // writen to the browser
  res.write("hello");
  // close browser
  res.end(); */

  res.setHeader("Content-Type", "text/html");
  // send html file

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "./about":
      path += "about.html";
      break;
    default:
      path += "404.html";
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
