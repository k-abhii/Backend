const express = require("express");
const FooduserModel = require("./userModel");
const app = express();
// const FooduserModel = require("./userModel");
const cookieParser  = require("cookie-parser");
// add cookies to req.cookies
app.use(cookieParser());
const secrets = require("./secrets");
app.use(express.json());
var jwt = require('jsonwebtoken');
app.post("/signup", async function(req,res){
    try{

        let data = req.body;
    let newUser =  await FooduserModel.create(data);
    console.log(newUser);
    console.log(data);
    res.end("data received");


    }catch(err){
        res.end(err.message);
    }
    
})

// login : email + password both
app.post("/login", async  function(req,res){
    try{
        let data = req.body;
        let {email,password} = req.body;
        if(email  && password){
            let user = await FooduserModel.findOne({email : email});
            if(user){
                if(user.password === password){
                    // create JWT ->->payload, secret text,algorithms->SHA 256
                    const token =jwt.sign({
                        data: user[_id], 
                            exp:Math.floor(Date.now()/1000)+(60*60*24)
                            },secrets.JWTSECRET);
                            // TO PUT TOKEN INTO COOKIES
                
                    res.cookies("JWT","token");
                    // TO SEND TOKEN
                    res.send("User Logged in ");

                }else{
                    res.end("Email or Password doest not match");
                }

            }else{
                res.end("User with this email id is not find kindly signup");
            }

        }else{
            console.log("Kindly Enter Email and password both");
            res.end("Kindly Enter Email and password both");
        }

    }catch(err){
    
        console.log(err.message);
        res.end(err.message);
    }
}) 
// users-> get all users->sensitive route ->protected route ->logged in  I will only allow that person
app.get("/users",  protectRoute,async function(req,res){
    try{
        let users= await FooduserModel.find();
        // to send  json data 
        res.json(users);

    }catch(err){
        console.log(err.message);
        res.end(err.message);
    }
})

function protectRoute(req,res,nextr){
    // console.log(req.cookies);
    const cookies = req.cookies;
    const JWT = cookies.JWT;

    console.log("Protect Route Encountered");
    let token = jwt.verify(JWT,secrets.JWTSECRET);
    console.log(token);
    // you are logged in then it will allow next function to run
    nextr();
}


app.listen(3000,function(){
    console.log("Server Started at 30000");
})