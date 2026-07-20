const express = require("express")
const app=express();

// console.dir(app);

let port=3000;

app.listen(port,()=>
{
    console.log(`App is running on port number ${port}`)
})
// app.get("/",(req,res)=>
// {
//     res.send("you are contacted with a direted path")
// })
// app.get("/apple",(req,res)=>
// {
//     res.send("you contacted with a apple ")
// })

// app.get((req,res)=>
// {
//     res.status(404).send("This path is not exist");
// })
// app.post("/",(req,res)=>
// {
//     res.send("this request send by the post request");
// })
// app.use((req,res)=>
// {
//     console.log("request recived")
//    let code="<h1>Personal Info</h1><ul><li>I am from Parbhani</li><li>Currently am parsuing BTech</li></ul>"
//     res.send(code);
// })
app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    res.send(`Welcome to the user @${username}`)
})

app.get("/search",(req,res)=>{
    let{q}=req.query;
    res.send(`this are the search results for query: ${q} `);
})