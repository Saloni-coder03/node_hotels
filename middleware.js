var express = require('express')
var app = express()

// Use of Middleware
app.use( (req,res,next) => {
   console.log('start');
   next();
   ; 
})
 //use of route
 app.get('/',(req,res,next) =>{
    res.send("This is a function.");
    next();
 })
 app.get('/',(req,res,next) =>{
    console.log("End Route.");
 })
 app.listen(2000);