import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  whatsapp: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  timing: { type: String },
  previousExperience: { type: String },
  message: { type: String },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
}, { timestamps: true });

export default mongoose.models.Admission || mongoose.model("Admission", AdmissionSchema);
