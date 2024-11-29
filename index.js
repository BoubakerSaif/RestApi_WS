import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./Routes/todoRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
dotenv.config();
mongoose.connect(process.env.DB_URL);
app.use(express.json());
app.use("/api/todo", todoRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
