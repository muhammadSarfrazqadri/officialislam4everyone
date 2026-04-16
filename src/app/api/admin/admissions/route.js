import dbConnect from "@/lib/db";
import Admission from "@/models/Admission";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const admissions = await Admission.find({}).populate("course").sort({ createdAt: -1 });
  return NextResponse.json(admissions);
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status } = await req.json();
    await dbConnect();
    const updated = await Admission.findByIdAndUpdate(id, { status }, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "Failed to update admission" }, { status: 500 });
  }
}
