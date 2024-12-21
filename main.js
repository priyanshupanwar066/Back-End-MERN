const express = require("express");
const app = express();
const port = 4000;
const fs = require("fs");
let date = new Date();
const blog = require('./routes/blog')


// app.use(express.static("public"));

app.use('/blog', blog)


//middleware one = logger for application
app.use((req, res, next) => {
    console.log(req.headers);
    req.priyu = "I AM Priyanshu Panwar";
  fs.appendFileSync("logs.txt", `${date} is a ${req.method}\n`);
  console.log(`${date} is a ${req.method}`);
  next();
});

//Middleware two
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page" + req.priyu);
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
app.listen(port, () => {
  console.log(`Port is Running on ${port}`);
});
