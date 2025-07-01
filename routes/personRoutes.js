const express = require('express');
const router = express.Router();
// import person models after exporting
const Person = require('../models/Person');


// Post route to add a person
// use async before callback fn:
router.post('/',async (req,res) =>{
try{
const data = req.body;
//Create a new Person document using the mongoose model
const newPerson = new Person(data);

//Save the new person to the database
   const response = await newPerson.save();// only this one gives the error
console.log('data saved');
res.status(200).json(response)
}
catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'});
}
})


// Get method to get the person
router.get('/',async (req,res) =>{
  try{
const data = await Person.find();
console.log('data fetched');
res.status(200).json(data);
  }

catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'});
}

})

//get method for parametrized url
router.get('/:workTypeName',async (req,res) => {
  try{
    const workType = req.params.workTypeName;
    if(workType=='chef' || workType== 'manager'|| workType == 'owner' ){
      const response = await Person.find({work : workType})
console.log('response fetched');
res.status(200).json(response);  
   }
    else{
      res.status(404).json({error: 'Invalid work type'});
    }

  }

catch(err){
  console.log(err)
  res.status(500).json({error:'Internal server error'});

}
})
//Updates the person records or any objects by using put/patch
router.put('/:id',async(req,res) =>{
try{
const personid = req.params.id;
const updatedPersonData = req.body;

const response = await Person.findByIdAndUpdate(personid,updatedPersonData,{
new: true,
runValidators: true
})

if(!response){
    return res.status(404).json({error: 'Person not found'});
}
console.log('data updated');
res.status(200).json(response);
}
catch(err){
console.log(err);
res.status(500).json({error: 'Internal server error'});

}
})
// for delete the records by using id 
router.delete('/:id', async(req,res) =>{
try{
const personsid = req.params.id;
const deletedrecords = await Person.findByIdAndDelete(personsid);
if(!deletedrecords){
  return res.status(404).json({error: 'ID not found'});
}
console.log('data deleted');
res.status(200).json({deletedrecords});

}
catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal Server error'});
}
})



module.exports = router;