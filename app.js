// Importing express and creating an instance of express
const express = require("express");
const app = express();

// Listen for request
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const indexFilePath = 'C:\\Users\\KIIT0001\\Desktop\\Backend\\Backend\\Server\\Files\\index.html';
app.get("/", (req, res) => {
  // res.send('<h2>This is the home page</h2>');
  res.sendFile( `${indexFilePath}`);
});

const aboutFilePath = 'C:\\Users\\KIIT0001\\Desktop\\Backend\\Backend\\Server\\Files\\about.html';
app.get("/about", (req, res) => {
  // res.send('<h2>This is the about page</h2>');
  res.sendFile(`${aboutFilePath}`);
});

// Redirecting
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile("./Server/Files/404.html", { root: __dirname });
});
