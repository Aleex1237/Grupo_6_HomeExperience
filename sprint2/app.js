const express=require("express");
const app=express();
const path=require("path");
const port=3000;
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","index.html"))
})

app.get("/cine", (req,res)=>{
    res.sendFile(path.join(__dirname, "views","cine.html"))
})

app.get("/bar", (req,res)=>{
    res.sendFile(path.join(__dirname, "views","bar.html"))
})

app.get("/productDetail", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","productDetail.html"))
})

app.get("/productCart", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","productCart.html"))
})

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","register.html"))
})

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","login.html")) 
})

app.get("/productLoad", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","productLoad.html")) 
})

app.listen(port,()=>{
    console.log(`El proyecto Home Experience se está ejecutando en localhost:${port}`)
})