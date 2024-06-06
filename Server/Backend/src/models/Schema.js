import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
  nameProduct: {
    type: String,
    require: [true, "Name requires!"],
    maxlength: [500, "Name require must not  more than 500 characters!"],
    minlength: [5, "Name require must more than 5 characters!"],
    trim: true,
  },
  customerRating: {
    type: Number,
    min: [1, "Rating must  be 1 or above!"],
  },
  selledRating: {
    type: Number,
    min: [1, "Rating must  be 1 or above!"],
  },
  startRating: {
    type: Number,
    min: [1, "Rating must  be 1 or above!"],
    max: [5, "Rating must not  be 5 or less!"],
  },
  trademark: {
    type: String,
    require: [true, "Name requires!"],
    maxlength: [100, "Name require must not  more than 100 characters!"],
    minlength: [2, "Name require must more than 2 characters!"],
    trim: true,
  },
  price: {
    type: Number,
    min: [0, "Rating must  be 0 or above!"],
    max: [1000000000, "Rating must not  be 1000000000 or less!"],
  },
  color: {
    type: String,
    validate: {
      validator: (value) => {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)
      },
      message: "Mã màu không hợp lệ.",
    },
  },
  quantity: {
    type: Number,
    min: [1, "Quantity must  be 1 or above!"],
    max: [1000000, "Quantity must not  be 1000000 or less!"],
  },

})
const Product = mongoose.model("product", productSchema)
module.exports = Product
