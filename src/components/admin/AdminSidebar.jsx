"use client";

import { LayoutDashboard, BookOpen, Users, ClipboardList, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const adminMenu = [
  { icon: LayoutDashboard, label: "Admin Dashboard", href: "/admin/dashboard" },
  { icon: ClipboardList, label: "Admissions", href: "/admin/admissions" },
  { icon: BookOpen, label: "Manage Courses", href: "/admin/courses" },
  { icon: Users, label: "Students", href: "/admin/students" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col p-6 shadow-xl">
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tight text-[#10B981]">Academy Admin</h2>
      </div>

      <nav className="flex-grow space-y-2">
        {adminMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-xl transition ${pathname === item.href ? "bg-[#10B981] text-white font-medium" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 p-3 w-full rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white transition"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
