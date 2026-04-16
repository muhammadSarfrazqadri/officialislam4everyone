import Link from "next/link";
import { BookOpen, Users, Award, CheckCircle } from "lucide-react";

export default function AcademyHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-[#064E3B] uppercase bg-emerald-100 rounded-full">
                Welcome to Islam4Everyone Academy
              </span>
              <h1 className="mb-6 text-4xl font-bold font-heading text-gray-900 dark:text-white lg:text-5xl">
                Master the Knowledge of <span className="text-[#064E3B]">Islam</span> from Anywhere
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Join thousands of students worldwide in learning Quran, Hadith, Arabic, and Islamic studies with qualified scholars from the comfort of your home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/academy/admission"
                  className="inline-block px-8 py-4 text-white font-semibold bg-[#064E3B] hover:bg-[#043d2e] rounded-lg transition duration-200"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/academy/courses"
                  className="inline-block px-8 py-4 text-[#064E3B] font-semibold border border-[#064E3B] hover:bg-emerald-50 rounded-lg transition duration-200"
                >
                  View Courses
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative">
              <img
                className="relative z-10 w-full h-full rounded-2xl shadow-2xl"
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800"
                alt="Academy Student"
              />
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-[#D4AF37] opacity-20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#10B981] opacity-20 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
