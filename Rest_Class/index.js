const express=require("express");
const app=express();
const path=require('path')
let port=3000;

app.use(express.urlencoded({ extended : true}));
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));
const { v4: uuidv4 } = require("uuid");

let posts=[
    {
    id: uuidv4(),
    username: "ShaikhRehan",
    content: "I love coding!"
    },

    {
    id: uuidv4(),
    username: "Alina",
    content: "She is very pretty girl!"
    },
    
    {
    id: uuidv4(),
    username: "Pratik",
    content: "He is very good in maths!"
    }
];

app.get("/posts",(req,res)=>{
     res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})

app.post("/posts",(req,res)=>{
   let {username,content}=req.body;
   let id=uuidv4();
   posts.push({id,username,content })
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    // console.log(post)
    res.render("show.ejs",{post})
})
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})