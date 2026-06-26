"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TopNavbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="w-80">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-3 text-slate-400"
          />

          <Input
            placeholder="Search cases..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-slate-500" />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">
          AS
        </div>
      </div>
    </header>
  );
}