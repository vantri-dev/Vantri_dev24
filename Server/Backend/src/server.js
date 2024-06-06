/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable quotes */
// import { mapOrder } from "~/utils/sorts.js"
import mongoose from "mongoose"
import exitHook from 'async-exit-hook'
import app from '~/index.js'
import { env } from "./config/environment"
const hostname = "localhost"
const port = 3000
// eslint-disable-next-line semi
mongoose
  .connect(env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to the database")
  })
  .then(() => {
    app.listen(port, hostname, () => {
      // eslint-disable-next-line no-console
      console.log(`Hello , I am running at ${hostname}:${port}/`)
    })
    exitHook(() => {
      mongoose.connection.close()
    })
  })
  // eslint-disable-next-line arrow-spacing
  .catch((Error) => {
    console.log(Error)
    process.exit(0)
  })
