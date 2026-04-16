"use client";

import { useEffect, useState } from "react";
import { Check, X, Mail, Phone, Calendar } from "lucide-react";

export default function AdminAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/admissions")
      .then((res) => res.json())
      .then((data) => {
        setAdmissions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch("/api/admin/admissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setAdmissions(admissions.map(a => a._id === id ? { ...a, status } : a));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Admission Management</h1>
      <div className="overflow-x-auto rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-[#064E3B] text-white">
            <tr>
              <th className="p-4 rounded-tl-3xl">Student</th>
              <th className="p-4">Course</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Status</th>
              <th className="p-4 rounded-tr-3xl">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {admissions.map((adm) => (
              <tr key={adm._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <td className="p-4">
                  <div className="font-semibold text-gray-900 dark:text-white">{adm.name}</div>
                  <div className="text-sm text-gray-500">Age: {adm.age} • {adm.country}</div>
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-400 font-medium">
                  {adm.course?.title || "Unknown"}
                </td>
                <td className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={14} className="text-[#064E3B]" /> {adm.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={14} className="text-[#10B981]" /> {adm.whatsapp}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    adm.status === "approved" ? "bg-emerald-100 text-emerald-800" :
                    adm.status === "rejected" ? "bg-red-100 text-red-800" :
                    "bg-amber-100 text-amber-800"
                  }`}>
                    {adm.status.charAt(0).toUpperCase() + adm.status.slice(1)}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(adm._id, "approved")}
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                      title="Approve"
                    >
                      <Check size={20} />
                    </button>
                    <button
                      onClick={() => updateStatus(adm._id, "rejected")}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Reject"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
