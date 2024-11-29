import express from "express";
import { createTodo, getAllTodos } from "../Controllers/todoControllers.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getAllTodos);

export default router;
