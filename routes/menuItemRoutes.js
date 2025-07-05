const express = require('express');
const router = express.Router();
// import MenuItem models after exporting
const MenuItem = require('../models/MenuItem');

//post method to add a MenuItem
router.post('/', async (req,res) => {
try{
  const data1 = req.body;
  // create a new menu item as a document using mongoose model
  const newMenuItem = new MenuItem(data1);
// save in the database
const savedMenu = await newMenuItem.save();
console.log('Data1 saved successfully');
res.status(200).json(savedMenu);

}
catch(err){
  console.log(err)
  res.status(500).json({Error: 'Internal server error'});
}
})
//get method on this MenuItem 
router.get('/',async (req,res) =>{
  try {
    const daaaata = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(daaaata);

  }
catch(err)
{
  console.log(err);
  res.status(500).json({Error: 'Internal server error'});

}
})


// get method for parametrized url
router.get('/:menuItemTaste',async (req,res) =>{
  try{
const menuTaste = req.params.menuItemTaste;
if(menuTaste== 'Sweet' || menuTaste == 'Sour' || menuTaste == 'Bitter'){
  const response = await menuTaste.find({taste: 'menuTaste'});
  console.log('response fetched');
  res.status(200).json(response);
}
else{
  res.status(404).json({error: 'Invalid menu taste type'});
}

}
catch(err){
  console.log(err);
  res.status(500).json({error:'Internal Server Error'});
}

})
//comment added for testing purposes
module.exports = router;