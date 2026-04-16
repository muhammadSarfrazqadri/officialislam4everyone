import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: String },
  subjects: [{ type: String }],
  profileImage: { type: String },
}, { timestamps: true });

export default mongoose.models.Teacher || mongoose.model("Teacher", TeacherSchema);
