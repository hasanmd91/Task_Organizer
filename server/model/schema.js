import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postTask = mongoose.model("postTask", taskSchema);

export default postTask;
