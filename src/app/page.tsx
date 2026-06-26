import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold">
          Good Morning 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Create and manage structured clinical
          cases for AI-powered patient simulations.
        </p>

        <Button className="mt-6">
          <Plus />
          New Clinical Case
        </Button>
      </section>
    </div>
  );
}