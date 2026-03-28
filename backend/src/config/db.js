import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connected sucessfully!");
  } catch (error) {
    console.error("Error connectging to mongoDB", error);
    process.exit(1); // exit with failure
  }
};
