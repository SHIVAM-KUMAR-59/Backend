// Implement Basic routing

/*
Some Basic Staus Code Ranges

1. 100 Range - Informational Responses
2. 200 Range - Success Responses
3. 300 Range - Redirection Messages
4. 400 Range - User or Client Error Responses
5. 500 Range - Server Error Responses
*/

const http = require("http");
const fs = require("fs");
const _ = require('lodash');

// Creating the server
const server = http.createServer((req, res) => {

  // Lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() =>{
    console.log("Hello");
  });
  greet();
  greet();
  // Corrected the writeHead call
  res.writeHead(200, { "Content-Type": "text/html" });

  let path = "./Files/";
  let url = req.url;
  // Check which url path is being requested
  switch (url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

      // Redirecting this path to about
    case "/about-me":
      res.statusCode = 301; // Permanent Redirect code
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Send the corresponding html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

// Listening on the server
server.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000");
});
