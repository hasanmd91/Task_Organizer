import mongoose from "mongoose";
import postTask from "../model/schema.js";

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const postTasks = await postTask.find();

    res.status(200).json(postTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task
export const createTask = async (req, res) => {
  const task = req.body;
  const newTask = new postTask(task);

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  const { id: _id } = req.params;

  const task = req.body;

  // Validate the task ID
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  try {
    const updatedTask = await postTask.findByIdAndUpdate(
      _id,
      { ...task, _id },
      {
        new: true,
      }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  // Validate the task ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  try {
    const deletedTask = await postTask.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
