// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todo")
const app = express()
const Port = 3000

app.get("/", (req, res) => {
    const todo = new Todo({
        title: "1",
        desc: "Hellow new row",
        isDone: false,
        days: 1227727
      });
      console.log("Todo to be saved:", todo);
  todo.save()
  res.send("Hello World!")
})


app.get('/a' , async (req, res)=>{
    let todo = await Todo.findeOne({})
    res.json({title: todo.title ,desc : todo.desc })
})

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);

  
}) 