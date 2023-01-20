const express=require("express");
const app=express();
path=require("path");
const mysql=require("./database/connection");
const cors=require("cors");
const bodyparser=require("body-parser");
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.set("views",path.join(__dirname,"view"));
app.set("view engine","hbs")



 app.get("/",(req,res)=>{
    res.render("index");
 })
app.get("/register",(req,res)=>{
   res.render("register");
})

app.get("/delete",(req,res)=>{
   res.render("delete");
})

 
 app.post("/insert",(req,res)=>{

    console.log(req.body.fname+req.body.lname+req.body.email+req.body.password);
    mysql.query(`insert into user values("${req.body.fname}","${req.body.lname}","${req.body.email}","${req.body.password}")`,(err,result)=>{
        
        res.render("index");
    })
 })

 app.post("/delete2",(req,res)=>{
    const body=req.body;
    mysql.query(`delete from user where email="${body.email}"`,(err,result)=>{
        res.render("index");
    })
 })
 app.listen(8000);
 console.log("hi--------hi");

 