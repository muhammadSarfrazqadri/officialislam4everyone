import dbConnect from "@/lib/db";
import Admission from "@/models/Admission";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.whatsapp || !data.course) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await dbConnect();

    const admission = new Admission(data);
    await admission.save();

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Admission error:", error);
    return NextResponse.json({ message: "Failed to submit admission application" }, { status: 500 });
  }
}
