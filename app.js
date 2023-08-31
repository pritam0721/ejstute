const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.set("view engine","ejs");



app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

let item = "";

let listofItems = ["Buy food","cook food","Eat food"]
let workitems  = []
app.get("/",function(req,res){
  
    let today = new Date();
    let currentday = today.getDay();
  
    let options = { weekday: 'long',  month: 'long', day: 'numeric' };

      let day = ""+ today.toLocaleDateString("en-US",options) ;

 

   res.render('list', {listTitel: day,  newlistItems : listofItems});
  
})

app.post("/",(req,res)=>{
 
  item = req.body.newItem;

  let pageList = req.body.list ;
 
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





app.listen(3000,function(){
   console.log("the server runing at http://localhost:3000")
})


