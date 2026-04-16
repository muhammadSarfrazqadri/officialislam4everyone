import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
  thumbnail: { type: String },
  syllabus: [{ type: String }],
  fee: { type: Number },
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
