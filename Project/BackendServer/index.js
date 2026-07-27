const express=require('express')
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/register",(req,res)=>{
    let{user,password}=req.query;
    res.send(`Standard GET response. Welcome ${user}`);
})


app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("Standard POST request");
})

app.listen(port,()=>{
console.log("Server is running on port 3000");   
})
