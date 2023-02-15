import express from "express";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/index.js";

const router = express.Router();

// route to get all tasks
router.get("/", getTasks);

// route to create a new task
router.post("/", createTask);

// route to update a task with a specific id
router.patch("/:id", updateTask);

// route to delete a task with a specific id
router.delete("/:id", deleteTask);

export default router;
