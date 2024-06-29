/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";
import exitHook from "async-exit-hook";
import app from "~/index.js";
import { env } from "./config/environment";
const hostname = "localhost";
const port = 3001;
const Schema = mongoose.Schema;
// eslint-disable-next-line semi
mongoose
  .connect(env.DB_CONNECT)
  .then(() => {
    console.log("connected to the database");
  })
  .then(() => {
    app.listen(port, hostname, async () => {
      // eslint-disable-next-line no-console
      console.log(`Hello , I am running at ${hostname}:${port}/`);

    });
    exitHook(() => {
      mongoose.connection.close();
    });
  })
  // eslint-disable-next-line arrow-spacing
  .catch((Error) => {
    console.log(Error);
    process.exit(0);
  });
