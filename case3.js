// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();

// // case 3 
// user defined middleware -> next call  
app.use(function (req, res, next) {
    console.log("use will always run");
        next();
})
app.post("/simple", function (req, res) {
    res.end("simple post output");
})
app.post("/simple", function (req, res) {
    res.end("simple1 post output");
})
app.listen(3000, function () {
    console.log("server started at port 3000");
})



