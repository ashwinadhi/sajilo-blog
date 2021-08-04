const express = require ("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req,res){
   res.render("home");
});

app.get("/register",function(req,res){
  res.render("register");
});

app.get("/login",function(req,res){
  res.render("login");
});

app.get("/submit",function(req,res){
  res.render("submit");
});

app.get("/blog",function(req,res){
  res.render("blog");
});






app.listen(3000, function(){
  console.log("Server is Statrted in Port 3000");
});
