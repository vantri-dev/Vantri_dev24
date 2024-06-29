import mongoose from "mongoose";
const ratingCommentSchema = new mongoose.Schema(
  {
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    ratingCounts: {
      1: { type: Number, default: 0 },
      2: { type: Number, default: 0 },
      3: { type: Number, default: 0 },
      4: { type: Number, default: 0 },
      5: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);
const RatingComment = mongoose.model("RatingComments", ratingCommentSchema);
module.exports = RatingComment;
