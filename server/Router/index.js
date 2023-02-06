import express from "express";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/index.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
