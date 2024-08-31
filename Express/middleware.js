// This file is an extension of 'view.js'

// Importing express and creating an instance of express
const express = require("express");
const app = express();

// Register View Engine, I have used EJS here, you can install it by typing 'npm i ejs'
app.set("view engine", "ejs");

// Listen for request
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Middleware
  /*
   next() is a function that allows the middleware to move out from this function and move onto the next because Express does not automatically knows when to move on and just hangs your browser if the 'next()' is not present
  */
app.use((req, res, next) => {
  console.log("New Request Made");
  console.log("Host: ", req.hostname);
  console.log("Path: ", req.path);
  console.log("Method: ", req.method);

  next();
});

// Static Files
app.use(express.static('Public'));

app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi Finds eggs", snippet: "lorem ipsum rand kaldor zane" },
    { title: "Mario Finds stars", snippet: "lorem ipsum rand kaldor zane" },
    { title: "Yamat Kudasai ahh", snippet: "lorem ipsum rand kaldor zane" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
