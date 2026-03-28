import mongoose from "mongoose";

// creating the schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// creating model base on schema

const Note = mongoose.model("Note", noteSchema);

export default Note;
