const mongoose = require('mongoose');
//Schema of menu items
const menuItemSchema = new mongoose.Schema({

name: {
    type: 'String',
    required: true
},
price: {
    type: 'Number',
    required: true
},
taste: {
    type: 'String',
    enum: ['Spicy','Sour','Sweet'],
    required: true
},
is_drink: {
    type: 'Boolean',
    default: false
},
ingredients: {
    type: ['String'],
    default: []
},
num_sales: {
    type: 'Number',
    default: 0
}

})
// create a moongoose model for this menuItemSchema
const MenuItem = mongoose.model('MenuItem',menuItemSchema);
// export this
module.exports = MenuItem;



