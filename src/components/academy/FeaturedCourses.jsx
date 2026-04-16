import { Book, Clock, BarChart } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Quran Recitation & Tajweed",
    description: "Learn to recite the Holy Quran with proper pronunciation and rules of Tajweed.",
    duration: "6 Months",
    level: "Beginner",
    id: "quran-tajweed",
  },
  {
    title: "Arabic Language Essentials",
    description: "Fundamentals of Modern Standard Arabic, focusing on grammar and conversation.",
    duration: "12 Months",
    level: "Intermediate",
    id: "arabic-essentials",
  },
  {
    title: "Islamic Jurisprudence (Fiqh)",
    description: "In-depth study of daily religious practices and Islamic law (Fiqh).",
    duration: "8 Months",
    level: "Advanced",
    id: "islamic-fiqh",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white">Featured Courses</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Structured learning paths designed for every level.</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {courses.map((course) => (
            <div key={course.id} className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
              <div className="h-full p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-emerald-100 rounded-lg">
                  <Book className="text-[#064E3B]" size={24} />
                </div>
                <h3 className="mb-4 text-xl font-bold dark:text-white">{course.title}</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-[#064E3B]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart size={16} className="mr-1 text-[#064E3B]" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <Link
                  href={`/academy/${course.id}`}
                  className="block w-full py-3 text-center font-semibold text-white bg-[#064E3B] rounded-lg hover:bg-[#043d2e] transition duration-200"
                >
                  Course Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/academy/courses" className="text-[#064E3B] font-semibold hover:underline">
            View All Courses &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
