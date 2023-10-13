const mongoose = require('mongoose');

 const productSchema = mongoose.Schema({
  productname: {
    type: String,
    
},
productdescription:{
    type: String,
},
price: {
    type: Number,
},
grams:{
    type: Number,

},
quantity:{
    type: Number,

},

})
productSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

productSchema.set('toJSON', {
  virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema,"product");

