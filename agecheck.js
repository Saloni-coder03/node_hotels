const express = require('express')
const app = express();
//middleware
app.use('/:age',(req,res,next) =>{
if(req.params.age <18){
    res.redirect('/fail');
}
next();
});
app.get('/fail',(req,res) => {
    res.send('Your age is low so u cannot access to this site')
});
app.get('/:age',(req,res)=>{
    res.send('your age is ' + req.params.age);
});
app.listen(1000);
// prompt- is used for taking the input as a user and use 
// use prompt-sync for to install