import express from "express";
import { createUser, getAllUser } from "../Controllers/userControllers.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);

export default router;
