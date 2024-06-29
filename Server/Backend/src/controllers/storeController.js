import StoreProduct from "~/models/storeProduct"
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/apiError";
exports.handleCreateStoreProduct = async (req, res, next) => {
  const product = await StoreProduct.create(req.body);
  try {
    res.status(StatusCodes.CREATED).json({
      status: "Success",
      data: {
        product,
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

exports.handleGetAllStoreProduct = async (req, res, next) => {
  try {
    let queryStr = JSON.stringify(req.query);
    // queryStr = queryStr.replace(
    //   //cu phap /\b(word)\b/:la tu can thay the
    //   /\b(gt|gte|lt|lte|in|elemMatch|eq)\b/g,
    //   (match) => `$${match}`
    // );
    const queryObj = JSON.parse(queryStr);
    const products = await StoreProduct.find(queryObj)

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
exports.handleGetStoreProduct = async (req, res, next) => {
  try {
    const product = await StoreProduct.findOne({ _id: req.params.id })
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
exports.handlePatchStoreProduct = async (req, res, next) => {
  try {
    const product = await StoreProduct.findByIdAndUpdate(
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
exports.handleDeleteStoreProduct = async (req, res, next) => {
  try {
    const product = await StoreProduct.findByIdAndDelete(req.params.id);
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
