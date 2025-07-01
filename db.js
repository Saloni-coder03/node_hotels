const mongoose = require('mongoose');
// mongoDB connection url
const mongoURL = 'mongodb://localhost:27017/company';

// setup mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

//Get the default connection
const db = mongoose.connection;

//define event listeners
 
db.on('connected',() => {
    console.log('Connected to MongoDB server');

})
db.on('disconnected',() => {
    console.log('MongoDB disconnected');
})
db.on('error',() => {
    console.log('MongoDB connection error:')
})
// exports the db
module.exports = db;