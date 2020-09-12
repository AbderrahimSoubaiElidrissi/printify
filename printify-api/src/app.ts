import express from "express";
import compression from "compression"; // compresses requests
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import { MONGODB_URI } from "./util/secrets";
import { apiRouter } from "./routes/main.route";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(cors());
app.use(helmet());

// Connect to MongoDB


(() => {
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("Mongo Connection Established");
  });
  connection.on("reconnected", () => {
    console.log("Mongo Connection Reestablished");
  });
  connection.on("disconnected", () => {
    console.log("Mongo Connection Disconnected");
    console.log("Trying to reconnect to Mongo ...");
    setTimeout(() => {
      mongoose.connect(MONGODB_URI);
    }, 3000);
  });
  connection.on("close", () => {
    console.log("Mongo Connection Closed");
  });
  connection.on("error", (error: Error) => {
    console.log("Mongo Connection ERROR: " + error);
  });

  const run = async () => {
    await mongoose.connect(MONGODB_URI);
  };
  run().catch(error => console.error(error));
})()

app.use(morgan("dev"));

app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * API routes.
 */

app.use("/api/" + process.env.API_VERSION, apiRouter());

export default app;
