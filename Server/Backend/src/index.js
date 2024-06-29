import express from "express"
import Routers from "~/routes/router"
import { errorHandlingMiddleware } from "~/middlewares/handleError"
import { configCors } from "~/config/cors"
const app = express()
app.use(express.json())
app.use(express.static("./src/Stactic")) //route page when not Found
app.use(configCors)
app.use("/", Routers)
app.use(errorHandlingMiddleware)
module.exports = app

