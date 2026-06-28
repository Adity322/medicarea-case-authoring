import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentCases } from "@/components/dashboard/recent-cases";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-5xl font-bold tracking-tight">
          Good Morning 👋
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          Create and manage structured
          clinical cases for AI-powered
          patient simulations.
        </p>

        <Button className="mt-8">
          <Plus />
          New Clinical Case
        </Button>
      </section>

      <StatsCards />

      <RecentCases />
    </div>
  );
}