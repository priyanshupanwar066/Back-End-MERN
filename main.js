const express = require("express");
const blog = require("./Routes/Blog");
const shop = require("./Routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop" , shop)

app.get("/", (req, res) => {
    console.log("Hey its a Get request");
    res.send("Hello Priyanshu Panwar");
});

app.post("/", (req, res) => {
    console.log("Hey Its a Post request");
    res.send("Hello Priyanshu Panwar from POST request");
});

app.put("/", (req, res) => {
    console.log("Hey Its a Put request");
    res.send("Hello Priyanshu Panwar from PUT request");
});

app.delete("/", (req, res) => {
    console.log("Hey Its a delete request");
    res.send("Hello Priyanshu Panwar from delete request");
});

app.get("/index" , (req ,res)=>{
    console.log("Hey Priyanshu Panwar from Index Html Get Request");
    // res.sendFile('E:/MERN STACK/MERN 4/Templates/index.html');
    res.sendFile("Templates/index.html" , {root: __dirname})
})

app.get('/api' , (req , res)=>{
    console.log("hey This is a JSON");
    res.json({a : 1 , b:2 , c : 3 , d : 4 , e : 5 , "Name":"PRiyu"})
})



app.listen(port, () => {
    console.log(`Port is running at ${port}`);
});
