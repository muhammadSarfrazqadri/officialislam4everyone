"use client";

import { useSession } from "next-auth/react";
import { BookOpen, Clock, Award, Bell } from "lucide-react";

export default function StudentDashboard() {
  const { data: session } = useSession();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, {session?.user?.name}!</h1>
          <p className="text-gray-500 dark:text-gray-400">Here's what's happening today in your academy.</p>
        </div>
        <button className="relative p-2 text-gray-400 hover:text-gray-500">
          <Bell size={24} />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: BookOpen, label: "Enrolled Courses", value: "3", color: "bg-blue-50 text-blue-600" },
          { icon: Clock, label: "Total Study Hours", value: "48h", color: "bg-emerald-50 text-emerald-600" },
          { icon: Award, label: "Certificates", value: "1", color: "bg-amber-50 text-amber-600" },
        ].map((stat, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className={`p-3 w-fit rounded-lg mb-4 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ongoing Courses */}
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2 dark:text-white">
            <BookOpen size={20} className="text-[#064E3B]" /> Ongoing Courses
          </h3>
          <div className="space-y-4">
            {["Quran with Tajweed", "Arabic Conversational"].map((course, i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 group hover:ring-1 ring-[#064E3B] transition cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-900 dark:text-white">{course}</p>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">65% Progress</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: "65%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2 dark:text-white">
            <Calendar size={20} className="text-[#064E3B]" /> Upcoming Classes
          </h3>
          <div className="space-y-4">
            {[
              { time: "05:00 PM", subject: "Tajweed Rules", date: "Today" },
              { time: "06:30 PM", subject: "Arabic Grammar", date: "Tomorrow" },
            ].map((cls, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{cls.subject}</p>
                  <p className="text-xs text-gray-500">{cls.date} • {cls.time}</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-[#064E3B] border border-[#064E3B] rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition">
                  Join Room
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
