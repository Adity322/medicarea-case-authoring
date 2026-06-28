interface ExaminationFormProps {
  caseData: any;
  setCaseData: React.Dispatch<React.SetStateAction<any>>;
}

export function ExaminationForm({
  caseData,
  setCaseData,
}: ExaminationFormProps) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-900">
        Examination Findings
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <input
          value={
            caseData.examination
              .bloodPressure
          }
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              examination: {
                ...prev.examination,
                bloodPressure:
                  e.target.value,
              },
            }))
          }
          placeholder="Blood Pressure"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <input
          value={
            caseData.examination.heartRate
          }
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              examination: {
                ...prev.examination,
                heartRate:
                  e.target.value,
              },
            }))
          }
          placeholder="Heart Rate"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <input
          value={
            caseData.examination
              .temperature
          }
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              examination: {
                ...prev.examination,
                temperature:
                  e.target.value,
              },
            }))
          }
          placeholder="Temperature"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <input
          value={
            caseData.examination
              .respiratoryRate
          }
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              examination: {
                ...prev.examination,
                respiratoryRate:
                  e.target.value,
              },
            }))
          }
          placeholder="Respiratory Rate"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>

      <div className="mt-6 space-y-6">
        <textarea
          rows={4}
          value={
            caseData.examination
              .generalExamination
          }
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              examination: {
                ...prev.examination,
                generalExamination:
                  e.target.value,
              },
            }))
          }
          placeholder="General Examination"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <textarea
          rows={4}
          value={
            caseData.examination
              .additionalFindings
          }
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              examination: {
                ...prev.examination,
                additionalFindings:
                  e.target.value,
              },
            }))
          }
          placeholder="Additional Findings"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>
    </div>
  );
}