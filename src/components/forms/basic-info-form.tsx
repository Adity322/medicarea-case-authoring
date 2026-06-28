interface BasicInfoFormProps {
  caseData: any;
  setCaseData: React.Dispatch<React.SetStateAction<any>>;
}

export function BasicInfoForm({
  caseData,
  setCaseData,
}: BasicInfoFormProps) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-900">
        Case Basics
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Case Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Case Title
          </label>

          <input
            type="text"
            value={caseData.title}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            placeholder="e.g. Acute Myocardial Infarction"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Medical Specialty */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Medical Specialty
          </label>

          <select
            value={caseData.specialty}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                specialty: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">
              Select Specialty
            </option>
            <option value="Cardiology">
              Cardiology
            </option>
            <option value="Pulmonology">
              Pulmonology
            </option>
            <option value="Neurology">
              Neurology
            </option>
            <option value="Endocrinology">
              Endocrinology
            </option>
            <option value="Gastroenterology">
              Gastroenterology
            </option>
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Difficulty Level
          </label>

          <select
            value={caseData.difficulty}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                difficulty: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">
              Select Difficulty
            </option>
            <option value="Beginner">
              Beginner
            </option>
            <option value="Intermediate">
              Intermediate
            </option>
            <option value="Advanced">
              Advanced
            </option>
          </select>
        </div>

        {/* Case ID */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Case ID
          </label>

          <input
            type="text"
            value={caseData.caseId ?? ""}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                caseId: e.target.value,
              }))
            }
            placeholder="MC-2026-001"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Case Description
        </label>

        <textarea
          rows={5}
          value={caseData.description}
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          placeholder="Brief overview of the clinical scenario..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>
    </div>
  );
}