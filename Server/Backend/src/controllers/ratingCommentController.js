import RatingComment from "~/models/ratingComment";

import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/apiError";
exports.handlCreateRatingCommentProduct = async (req, res, next) => {
  const ratingCommentProduct = await RatingComment.create(req.body);
  try {
    res.status(StatusCodes.CREATED).json({
      status: "Success",
      data: {
        ratingCommentProduct,
      },
    });
  } catch (error) {
    const customApiError = new ApiError(
      StatusCodes.BAD_REQUEST,
      "Create Product Falling!"
    );
    next(customApiError);
  }
};
exports.handleRatingCommentProduct = async (req, res, next) => {
  try {
    const queryStr = JSON.stringify(req.query);

    const queryObj = JSON.parse(queryStr);
    const products = await RatingComment.find(queryObj);
    res.status(StatusCodes.OK).json({
      status: "Success",
      lengthProduct: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    const customApiError = new ApiError(
      StatusCodes.NOT_FOUND,
      "Get  All Product Falling!"
    );
    next(customApiError);
  }
};

exports.handleGetRatingComment = async (req, res, next) => {
  try {
    const product = await RatingComment.findOne({ _id: req.params.id })
      .populate("detailsproducts")
      .populate("ratingcomments");
    res.status(StatusCodes.OK).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (error) {
    const customApiError = new ApiError(
      StatusCodes.NOT_FOUND,
      "Get Product Falling!"
    );
    next(customApiError);
  }
};
exports.handlePatchRatingComment = async (req, res, next) => {
  try {
    const product = await RatingComment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(StatusCodes.CREATED).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (error) {
    const customApiError = new ApiError(
      StatusCodes.NOT_FOUND,
      "Patch Falling!"
    );
    next(customApiError);
  }
};
exports.handleDeleteRatingComment = async (req, res, next) => {
  try {
    const product = await RatingComment.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.NO_CONTENT).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (error) {
    const customApiError = new ApiError(
      StatusCodes.NOT_FOUND,
      "Delete Falling!"
    );
    next(customApiError);
  }
};
