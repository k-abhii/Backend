// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();
// case:1

//Code Execution: as soon as res.end line is exceuted there is not further 
///exceution of lower handler function
//even if they satisifies all the condition.
app.get("/simple", function (req, res) {
    res.end("simple2 output");
})
app.get("/simple", function (req, res) {
    res.end("simple1 output");
})
app.get("/simple", function (req, res) {
    res.end("simple output");
})



app.listen(3000, function () {
    console.log("server started at port 3000");
})