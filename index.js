import express from "express";
import 'dotenv/config'

const App = express();

App.get("/",(req,res)=>{
res.send("Hello world this is Enterence");
})

App.listen(process.env.PORT,()=>{
console.log("Server is Running");
})