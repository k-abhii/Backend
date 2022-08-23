// require express
const express = require("express");
// app-> signify your server
const app = express();
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