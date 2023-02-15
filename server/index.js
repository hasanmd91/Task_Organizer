import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./Router/index.js";

const app = express();
dotenv.config();

// Set up middleware to parse requests
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Mount the router at the '/tasks' endpoint
app.use("/tasks", router);

// Start the server
const PORT = process.env.port || 3001;
mongoose
  .connect(process.env.CONNECETION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on the port ${PORT}`))
  )
  .catch((error) => {
    console.log(`Failed to connect to MongoDB: ${error}`);
    process.exit(1);
  });

// Log when the connection to the database is established
mongoose.connection.on("open", () => {
  console.log("Mongoose connected.");
});

// Body-parser is a middleware for Node.js that parses incoming request bodies in a middleware before the handlers, making it available under the req.body property
//in express.js applications. It allows you to extract data from a client request and makes it easy to handle JSON or URL-encoded form data in your Node.js applications.
