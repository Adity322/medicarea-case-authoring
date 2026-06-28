
const cases = [
  {
    title: "Acute MI with ST elevation",
    patient: "James Okonkwo, 58M",
    specialty: "Cardiology",
    progress: 60,
  },
  {
    title: "Diabetic ketoacidosis",
    patient: "Priya Sharma, 24F",
    specialty: "Endocrinology",
    progress: 100,
  },
];

export function RecentCases() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Recent Cases
        </h2>

        <button className="text-sm text-blue-600">
          View All
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200/70 bg-white p-5"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {item.patient}
            </p>

            <p className="text-sm text-slate-400">
              {item.specialty}
            </p>

            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{
                  width: `${item.progress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {item.progress}% complete
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}