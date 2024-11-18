import mongoose from "mongoose";
const { Schema } = mongoose;
const detailsProductSchema = new Schema(
  {
    trademark: {
      type: String,
      maxlength: [100, "Trademark require must not  more than 100 characters!"],
      minlength: [1, "Trademark require must more than 1 characters!"],
      trim: true,
    },
    origin: {
      type: String,
      maxlength: [100, "Origin require must not  more than 100 characters!"],
      minlength: [1, "Origin require must more than 1 characters!"],
      trim: true,
    },
    genuine: {
      type: Boolean,
      bool: Boolean,
      trim: true,
    },
    sentFrom: {
      type: String,
      maxlength: [500, "SentFrom require must not  more than 100 characters!"],
      minlength: [2, "SentFrom require must more than 1 characters!"],
      trim: true,
    },
    content: {
      description: {
        p1: {
          require: [true, "Content product require"],
          type: String,
          minlength: [10, "SentFrom require must more than 100 characters!"],
        },
        p2: {
          require: [true, "Content product require"],
          type: String,
          minlength: [10, "SentFrom require must more than 100 characters!"],
        },
        p3: {
          require: [true, "Content product require"],
          type: String,
          minlength: [10, "SentFrom require must more than 100 characters!"],
        },
        linkDescription: {
          type: String,
        },
        img: [String],
      },
    },
    _idProduct: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  },

  {
    timestamps: true,
  }
);
const DetailsProduct = mongoose.model("DetailsProducts", detailsProductSchema);
module.exports = DetailsProduct;
