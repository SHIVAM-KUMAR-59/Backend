// Importing express and creating an instance of express
const express = require("express");
const app = express();

// Listen for request
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  // res.send('<h2>This is the home page</h2>');
  res.sendFile("./Server/Files/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send('<h2>This is the about page</h2>');
  res.sendFile("./Server/Files/about.html", { root: __dirname });
});

// Redirecting
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile("./Server/Files/404.html", { root: __dirname });
});
