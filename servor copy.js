// require express
const express = require("express");
// app-> signify your server
const app = express();
// if you want data in backend from fronend 
app.use(express.json());
//post route
app.post("/sayhello",function(req,res){
    console.log(req.body);
    res.end("Post wala hello");
})

// Template route 
app.get("/getSquare/:num1/:num2",function(req,res){
    console.log("Header me Data :",req.params.num1);
    console.log("Header me Data :",req.params.num2);
    //let number = req.params.num;
   // let sq = number*number;
   let sq = req.params.num1*req.params.num2;
    res.end(sq+" ");
})
// get karna hai data from sayhello
app.get("/sayhello",function(req,res){

    // frontend 
    res.send("Hello from Servor");
})

// get karna hai data from saybye 
app.get("/sayBye",function(req,res){
    // frontend
    res.end("Bye from Servor");
})


// listen ,3000-> address of a servor-> on a given machine 

app.listen(3000,function(){
    console.log("Servor started at 3000");
})

//console.log("Hello  My Dear ! How are you? ");