const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.set("view engine","ejs");



app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

var item = "";

var listofItems = ["Buy food","cook food","Eat food"]
var workitems  = []
app.get("/",function(req,res){
  
    var today = new Date();
    var currentday = today.getDay();
  
    var options = { weekday: 'long',  month: 'long', day: 'numeric' };

      var day = ""+ today.toLocaleDateString("en-US",options) ;

 

   res.render('list', {listTitel: day,  newlistItems : listofItems});
  
})

app.post("/",(req,res)=>{
    console.log(req.body);
  item = req.body.newItem;

  listofItems.push(item);



  res.redirect("/");
})

app.get("/work",(req,res) =>{
   var itemWork = req.body.newItem;
   workitems.push(itemWork);
   res.render('list',{listTitel:"Work List", newlistItems : workitems})
})





app.listen(3000,function(){
   console.log("the server runing at http://localhost:3000")
})


