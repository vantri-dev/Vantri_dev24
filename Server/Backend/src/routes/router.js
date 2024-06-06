import express from "express"
import controller from "~/controllers/Controller"
const Routers = express.Router()

Routers.route("/")
  .get(controller.handleGetAllProfile)
  .post(controller.handleCreateProfile)
Routers.route("/:id")
  .get(controller.handleGetProfile)
  .delete(controller.handleDeleteProfile)
  .patch(controller.handlePatchProfile)
export default Routers
