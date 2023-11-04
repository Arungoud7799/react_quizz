import mongoose from "mongoose";

// Define a Mongoose schema for the questions
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctOption: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

// Create a Mongoose model based on the schema
const Question = mongoose.model("Question", questionSchema);

export default Question;
