import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postTask = mongoose.model("postTask", taskSchema);

export default postTask;
