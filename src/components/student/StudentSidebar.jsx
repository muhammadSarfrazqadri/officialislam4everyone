import { LayoutDashboard, BookOpen, Calendar, Settings, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard" },
  { icon: BookOpen, label: "My Courses", href: "/student/courses" },
  { icon: Calendar, label: "Schedule", href: "/student/schedule" },
  { icon: User, label: "Profile", href: "/student/profile" },
  { icon: Settings, label: "Settings", href: "/student/settings" },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#064E3B] text-white flex flex-col p-6 shadow-xl">
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tight text-white/90">Academy Portal</h2>
      </div>

      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-xl transition ${pathname === item.href ? "bg-white/10 text-white font-medium shadow-md shadow-black/10" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 p-3 w-full rounded-xl text-white/70 hover:bg-white/5 hover:text-white transition"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
