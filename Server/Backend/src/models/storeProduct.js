import mongoose from "mongoose";
const StoreProductSchema = new mongoose.Schema(
  {
    nameStore: {
      type: String,
      require: [true, "Name  store require! "],
      maxlength: [100, "SentFrom require must not  more than 100 characters!"],
      minlength: [1, "SentFrom require must more than 1 characters!"],
    },
    logo: {
      type: String,
      require: [true, "Image requires!"],
    },
    review: {
      type: Number,
      require: [true, "Review requires!"],
    },
    quantityProduct: {
      type: Number,
      require: [true, "Quantity product requires!"],
    },
    responseRate: {
      type: Number,
      require: [true, "Response Rate requires!"],
      min: [1, "Rating start must  be 1 or above!"],
      max: [100, "Rating  start must not  be 100 or less!"],
    },

    responseTime: {
      type: Number,
      require: [true, "Response Time requires!"],
    },

    join: {
      type: Number,
      require: [true, "Join requires!"],
    },
    follow: {
      type: Number,
      require: [true, "Follow requires!"],
    },
  },
  {
    timestamps: true,
  }
);
const StoreProduct = mongoose.model("StoreProducts", StoreProductSchema);
module.exports = StoreProduct;
