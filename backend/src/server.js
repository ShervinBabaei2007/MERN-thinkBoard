import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import express from "express";
import path from "path";

import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}
app.use(express.json());
app.use(ratelimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(5001, () => {
    console.log(`Server started on PORT: ${port}`);
  });
});

// mongodb+srv://shervinb22_db_user:j5ymLBKOATImuCEa@cluster0.choyy4y.mongodb.net/?appName=Cluster0
