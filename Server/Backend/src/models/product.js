import mongoose from "mongoose";
import slug from "slug";
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    nameProduct: {
      type: String,
      require: [true, "Name requires!"],
      maxlength: [500, "Name require must not  more than 500 characters!"],
      minlength: [5, "Name require must more than 5 characters!"],
      trim: true,
    },
    slug: {
      type: String,
      require: [true, "Slug requires!"],
      get: function () {
        return `${slug(this.nameProduct)}`;
      },
    },
    rating: {
      customerRating: {
        type: Number,
        min: [1, "Rating customer must  be 1 or above!"],
      },
      selledRating: {
        type: Number,
        min: [1, "Rating selling must  be 1 or above!"],
      },
      startRating: {
        type: Number,
        min: [1, "Rating start must  be 1 or above!"],
        max: [5, "Rating  start must not  be 5 or less!"],
      },
    },
    trademark: {
      type: String,
      require: [true, "Trademark requires!"],
      maxlength: [100, "Trademark require must not  more than 100 characters!"],
      minlength: [2, "Trademark require must more than 2 characters!"],
      trim: true,
    },
    price: {
      type: Number,
      require: [true, "Price requires!"],
      min: [0, "Rating must  be 0 or above!"],
      max: [1000000000, "Rating must not  be 1000000000 or less!"],
    },
    discount: {
      type: Number,
      min: [1, "Rating must  be 1 or above!"],
      max: [100, "Rating must not  be 100 or less!"],
    },
    option: {
      color: [String],
      cap: [Number],
    },

    quantity: {
      type: Number,
      require: [true, "Quantity requires!"],
      min: [1, "Quantity must  be 1 or above!"],
      max: [1000000, "Quantity must not  be 1000000 or less!"],
    },
    image: [String],
  },
  {
    timestamps: true,
  }
);
productSchema.set("toObject", { virtuals: true });
productSchema.set("toJSON", { virtuals: true });
productSchema.virtual("detailsproducts", {
  ref: "DetailsProducts",
  localField: "_id",
  foreignField: "_idProduct",
});
productSchema.virtual("ratingcomments", {
  ref: "RatingComments",
  localField: "_id",
  foreignField: "_idProduct",
});
const Product = mongoose.model("Products", productSchema);
module.exports = Product;
