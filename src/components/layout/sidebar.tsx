"use client";

import {
  LayoutDashboard,
  Plus,
  FileText,
  CheckCircle,
  Settings,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-56 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-xl font-bold text-blue-600">
          MediCarea
        </h1>
        <p className="text-xs text-muted-foreground">
          Case Portal
        </p>
      </div>

      <nav className="space-y-2 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-50">
          <Plus size={18} />
          Create Case
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-50">
          <FileText size={18} />
          Drafts
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-50">
          <CheckCircle size={18} />
          Completed
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-50">
          <Settings size={18} />
          Settings
        </button>
      </nav>
    </aside>
  );
}