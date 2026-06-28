"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Plus,
  FileText,
  CheckCircle,
  Settings,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Create Case",
    href: "/create-case",
    icon: Plus,
  },
  {
    title: "Drafts",
    href: "/drafts",
    icon: FileText,
  },
  {
    title: "Completed",
    href: "/completed",
    icon: CheckCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-72 border-r border-slate-200/70 bg-white">
      {/* Logo */}
      <div className="border-b border-slate-200/70 px-6 py-5">
        <h1 className="text-xl font-bold text-blue-600">
          MediCarea
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Case Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-slate-200/70 p-4">
        <Link
          href="/settings"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors
            ${
              pathname === "/settings"
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
        >
          <Settings size={18} />
          Settings
        </Link>

        <div className="mt-4 flex items-center gap-3 rounded-xl p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            AS
          </div>

          <div>
            <p className="text-sm font-medium text-slate-900">
              Aditya Singh
            </p>

            <p className="text-xs text-slate-500">
              Medical Writer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}