const express = require('express');
const app = express();
const db = require('./db');
// DOTENV FILE(Sensit.. info..)
require('dotenv').config();


const bodyParser = require('body-parser')
app.use(bodyParser.json());// use req.body
// .json bcz we r using json in postman


//get method use : to get only information ,no change, no update etc
app.get('/',(req,res) =>{
    res.send("This is the best place to learn and i learned alot!")
})



//1.import the router files for person
const personRoutes = require('./routes/personRoutes');
// use the routers
app.use('/person',personRoutes);

// 2.import the router files for menuItem
const menuItemRoutes = require('./routes/menuItemRoutes');
// use the routers 
app.use('/menu',menuItemRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 4000;



//app.get('/chicken', (req,res) => {
//res.send('Good taste of chicken and i made this')
//})
//app.get('/sallu' , (req,res) =>{
  //  res.send('She is a very beautiful girl')
//})
//app.get('/idli', (req,res) =>{
  //var customized_idli = {
  //  name: 'rava idli',
    //size: '10 cm diameter',
  //is_sambhar: true,
   // is_chutney: false
 // }
   // res.send(customized_idli)
//})
app.listen(PORT, () => {
  console.log('Listening on port 4000');
})
