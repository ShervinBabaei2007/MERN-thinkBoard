import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import express from "express";

import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

if (!process.env.VERCEL && process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}
app.use(express.json());
app.use(ratelimiter);

app.use("/api/notes", notesRoutes);

export default app;

if (process.env.VERCEL) {
  // serverless: no listen(); connection is opened on cold start
  connectDB();
} else {
  connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server started on PORT: ${port}`);
    });
  });
}
