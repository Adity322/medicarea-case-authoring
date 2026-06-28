import { FileText, CircleDashed, CheckCircle2 } from "lucide-react";

const stats = [
  {
    title: "Total Cases",
    value: "15",
    subtitle: "+3 this month",
    icon: FileText,
  },
  {
    title: "In Draft",
    value: "3",
    subtitle: "In progress",
    icon: CircleDashed,
  },
  {
    title: "Completed",
    value: "12",
    subtitle: "80% completion rate",
    icon: CheckCircle2,
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200/70 bg-white p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {stat.title}
              </p>

              <Icon
                size={20}
                className="text-slate-400"
              />
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {stat.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}