interface HistoryFormProps {
  caseData: any;
  setCaseData: React.Dispatch<React.SetStateAction<any>>;
}

export function HistoryForm({
  caseData,
  setCaseData,
}: HistoryFormProps) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-900">
        Patient History
      </h2>

      <div className="space-y-6">
        <textarea
          rows={5}
          value={caseData.history.presentIllness}
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              history: {
                ...prev.history,
                presentIllness: e.target.value,
              },
            }))
          }
          placeholder="History of Present Illness"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <textarea
          rows={4}
          value={caseData.history.pastMedicalHistory}
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              history: {
                ...prev.history,
                pastMedicalHistory:
                  e.target.value,
              },
            }))
          }
          placeholder="Past Medical History"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <textarea
          rows={4}
          value={caseData.history.medicationHistory}
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              history: {
                ...prev.history,
                medicationHistory:
                  e.target.value,
              },
            }))
          }
          placeholder="Medication History"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <textarea
            rows={4}
            value={caseData.history.familyHistory}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                history: {
                  ...prev.history,
                  familyHistory:
                    e.target.value,
                },
              }))
            }
            placeholder="Family History"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />

          <textarea
            rows={4}
            value={caseData.history.socialHistory}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                history: {
                  ...prev.history,
                  socialHistory:
                    e.target.value,
                },
              }))
            }
            placeholder="Social History"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}