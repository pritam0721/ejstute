const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname+"/day.js")

app.set("view engine","ejs");



app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const item = "";

const listofItems = ["Buy food","cook food","Eat food"]
const workitems  = []
app.get("/",function(req,res){
  
   
  
   
const day = date.getDate();
 

   res.render('list', {listTitel: day,  newlistItems : listofItems});
  
})

app.post("/",(req,res)=>{
 
  item = req.body.newItem;

  const pageList = req.body.list ;
 
    if(pageList ==="Work"){
      workitems.push(item);
       res.redirect("/work");
     }else{
      listofItems.push(item);
      res.redirect("/");

    }




  
})

app.get("/work",(req,res) =>{
  res.render('list',{listTitel:"Work List", newlistItems : workitems})
})

app.get("/about",(req,res)=>{
    res.render('about');
})



app.listen(3000,function(){
   console.log("the server runing at http://localhost:3000")
})


