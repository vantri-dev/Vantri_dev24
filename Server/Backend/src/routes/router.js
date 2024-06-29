import express from "express";
import controller from "~/controllers/productController";
import controllerDetails from "~/controllers/detailsController";
import controllerRatingComment from "~/controllers/ratingCommentController";
import controllerStoreProduct from "~/controllers/storeController";
const Routers = express.Router();

Routers.route("/product")
  .get(controller.handleGetAllProduct)
  .post(controller.handleCreateProduct);
Routers.route("/product/:id")
  .get(controller.handleGetProduct)
  .delete(controller.handleDeleteProduct)
  .patch(controller.handlePatchProduct);

Routers.route("/detailsproduct")
  .get(controllerDetails.handleGetAllDetailProduct)
  .post(controllerDetails.handleCreateDetailProduct);
Routers.route("/detailsproduct/:id")
  .get(controllerDetails.handleGetDetailProduct)
  .delete(controllerDetails.handleDeleteDetailProduct)
  .patch(controllerDetails.handlePatchDetailProduct);

Routers.route("/ratingCommentProduct")
  .get(controllerRatingComment.handleRatingCommentProduct)
  .post(controllerRatingComment.handlCreateRatingCommentProduct);
Routers.route("/ratingCommentProduct/:id")
  .get(controllerRatingComment.handleGetRatingComment)
  .delete(controllerRatingComment.handleDeleteRatingComment)
  .patch(controllerRatingComment.handlePatchRatingComment);

Routers.route("/storeProduct")
  .get(controllerStoreProduct.handleGetAllStoreProduct)
  .post(controllerStoreProduct.handleCreateStoreProduct);
Routers.route("/storeProduct/:id")
  .get(controllerStoreProduct.handleGetStoreProduct)
  .delete(controllerStoreProduct.handleDeleteStoreProduct)
  .patch(controllerStoreProduct.handlePatchStoreProduct);
export default Routers;
