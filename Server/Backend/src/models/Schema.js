
import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name requires!']
  },
  age: {
    type: Number
  },
  total: {
    type: Number
  },
  image:{
    type:String,
    require: [true, 'Image requires!']
  },
  price:{
    type:Number,
    require: [true, 'Price requires!']
  }
})
const Product = mongoose.model('product', productSchema)
module.exports = Product
