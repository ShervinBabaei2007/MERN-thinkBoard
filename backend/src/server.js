import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log(`Server started on PORT: ${port}`);
});

// mongodb+srv://shervinb22_db_user:j5ymLBKOATImuCEa@cluster0.choyy4y.mongodb.net/?appName=Cluster0
