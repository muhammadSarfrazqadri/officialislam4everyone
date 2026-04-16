"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().transform((v) => parseInt(v, 10)).pipe(z.number().min(5, "Age must be at least 5")),
  country: z.string().min(2, "Please enter your country"),
  whatsapp: z.string().min(7, "Please enter a valid WhatsApp number"),
  email: z.string().email("Please enter a valid email"),
  course: z.string().min(1, "Please select a course"),
  timing: z.string().optional(),
  previousExperience: z.string().optional(),
  message: z.string().optional(),
});

export default function AdmissionForm() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto p-12 bg-white dark:bg-gray-900 rounded-3xl text-center shadow-xl">
        <CheckCircle2 className="mx-auto w-16 h-16 text-[#10B981] mb-6" />
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Submission Successful!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Thank you for applying to Islam4Everyone Academy. Our team will contact you on WhatsApp or Email within 24-48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-[#064E3B] text-white rounded-lg hover:bg-emerald-900 transition"
        >
          Back to Academy
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Academy Admission Form</h1>
        <p className="text-gray-600 dark:text-gray-400">Fill out the form below to start your journey of learning.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input
              {...register("name")}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#064E3B] outline-none dark:bg-gray-800 dark:text-white ${errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"}`}
              placeholder="Your Name"
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age</label>
            <input
              type="number"
              {...register("age")}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#064E3B] outline-none dark:bg-gray-800 dark:text-white ${errors.age ? "border-red-500" : "border-gray-200 dark:border-gray-700"}`}
              placeholder="Enter Age"
            />
            {errors.age && <span className="text-xs text-red-500">{errors.age.message}</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email address</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#064E3B] outline-none dark:bg-gray-800 dark:text-white ${errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"}`}
              placeholder="email@example.com"
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">WhatsApp Number</label>
            <input
              {...register("whatsapp")}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#064E3B] outline-none dark:bg-gray-800 dark:text-white ${errors.whatsapp ? "border-red-500" : "border-gray-200 dark:border-gray-700"}`}
              placeholder="+1 234 567 890"
            />
            {errors.whatsapp && <span className="text-xs text-red-500">{errors.whatsapp.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
            <input
              {...register("country")}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#064E3B] outline-none dark:bg-gray-800 dark:text-white ${errors.country ? "border-red-500" : "border-gray-200 dark:border-gray-700"}`}
              placeholder="e.g. USA, UK, Pakistan"
            />
            {errors.country && <span className="text-xs text-red-500">{errors.country.message}</span>}
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Course of Interest</label>
            <select
              {...register("course")}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#064E3B] outline-none dark:bg-gray-800 dark:text-white ${errors.course ? "border-red-500" : "border-gray-200 dark:border-gray-700"}`}
            >
              <option value="">Select a Course</option>
              {/* These would normally be fetched from the DB but we are using placeholders for now */}
              <option value="60d21b4667d0d8992e610c85">Quran Recitation & Tajweed</option>
              <option value="60d21b4667d0d8992e610c86">Arabic Essentials</option>
              <option value="60d21b4667d0d8992e610c87">Islamic Studies</option>
            </select>
            {errors.course && <span className="text-xs text-red-500">{errors.course.message}</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Timing</label>
          <input
            {...register("timing")}
            className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 outline-none dark:bg-gray-800 focus:ring-2 focus:ring-[#064E3B]"
            placeholder="e.g. Evenings, Weekends, Mon-Wed 5PM UTC"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tell us about your previous experience</label>
          <textarea
            {...register("previousExperience")}
            className="w-full p-3 h-24 rounded-lg border border-gray-200 dark:border-gray-700 outline-none dark:bg-gray-800 focus:ring-2 focus:ring-[#064E3B]"
            placeholder="What have you studied before?"
          ></textarea>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 p-4 text-red-700 bg-red-50 rounded-lg">
            <AlertCircle size={20} />
            <span>{errorMsg}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full py-4 rounded-xl text-white font-bold transition flex items-center justify-center gap-2 ${status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-[#064E3B] hover:bg-[#043d2e]"}`}
        >
          {status === "loading" ? "Submitting Application..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
