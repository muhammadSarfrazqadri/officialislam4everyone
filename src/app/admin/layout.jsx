"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || (session && session.user.role !== "admin")) {
      router.push("/auth/signin");
    }
  }, [status, session, router]);

  if (status === "loading") return <div>Checking Permissions...</div>;
  if (!session || session.user.role !== "admin") return null;

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      <AdminSidebar />
      <main className="flex-grow overflow-auto bg-gray-50/50 dark:bg-gray-950">
        {children}
      </main>
    </div>
  );
}
