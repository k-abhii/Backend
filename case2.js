// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();
// case 2
////get /post/patch delete 

//******** Code Execution: as soon as res.end line is exceuted there is not further 
// exceution of lower handler function
// even if they satisifies all the condition.

// * Res: when a request is send then it will execute all the route 
// handlers serially*/


app.use(function (req, res) {
    res.end("use will always run");
})

app.post("/simple", function (req, res) {
    res.end("simple post output");
})
app.get("/simple", function (req, res) {
    res.end("simple get output");
})
app.patch("/simple", function (req, res) {
    res.end("simple patch output");
})
app.delete("/simple", function (req, res) {
    res.end("simple patch output");
})


app.listen(3000, function () {
    console.log("server started at port 3000");
})