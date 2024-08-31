// Importing express and creating an instance of express
const express = require("express");
const app = express();

// Register View Engine, I have used EJS here, you can install it by typing 'npm i ejs'
app.set("view engine", "ejs");

// Listen for request
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

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
