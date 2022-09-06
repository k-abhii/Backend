// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();

// case 4  pre-defined middleware
app.use(express.json());
app.post("/simple", function (req, res) {
    console.log("data", req.body);
    res.end("simple post output");
})
app.post("/simple", function (req, res) {
    res.end("simple1 post output");
})
app.listen(3000, function () {
    console.log("server started at port 3000");
})
