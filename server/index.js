import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/tasks", router);

const PORT = process.env.port || 5000;

mongoose
  .connect(process.env.CONNECETION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on the port ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.connection.on("open", () => {
  console.log("Mongoose connected.");
});

// Body-parser is a middleware for Node.js that parses incoming request bodies in a middleware before the handlers, making it available under the req.body property
//in express.js applications. It allows you to extract data from a client request and makes it easy to handle JSON or URL-encoded form data in your Node.js applications.
