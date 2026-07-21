const express=require("express");
const app=express();
const path=require("path")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/hello",(req,res)=>{
    res.send("Hello")
})
app.get("/game",(req,res)=>{
    let demo=Math.floor(Math.random() * 6)+1;
    res.render("game",{demo})
})
app.get("/insta:username",(req,res)=>{
    let {username}=req.params;
    res.render("instagram",{username});
})
const port=3000;
app.listen(port,()=>{
    console.log("server is running on port 3000 ")
})
