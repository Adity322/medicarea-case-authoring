interface PatientDetailsFormProps {
  caseData: any;
  setCaseData: React.Dispatch<React.SetStateAction<any>>;
}

export function PatientDetailsForm({
  caseData,
  setCaseData,
}: PatientDetailsFormProps) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-8">
      <h2 className="mb-6 text-lg font-semibold text-slate-900">
        Patient Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Patient Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Patient Name
          </label>

          <input
            value={caseData.patient.name}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                patient: {
                  ...prev.patient,
                  name: e.target.value,
                },
              }))
            }
            placeholder="e.g. John Doe"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Age */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Age
          </label>

          <input
            value={caseData.patient.age}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                patient: {
                  ...prev.patient,
                  age: e.target.value,
                },
              }))
            }
            placeholder="e.g. 45"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Gender
          </label>

          <select
            value={caseData.patient.gender}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                patient: {
                  ...prev.patient,
                  gender: e.target.value,
                },
              }))
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">
              Select Gender
            </option>
            <option value="Male">
              Male
            </option>
            <option value="Female">
              Female
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </div>

        {/* Occupation */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Occupation
          </label>

          <input
            value={caseData.patient.occupation}
            onChange={(e) =>
              setCaseData((prev: any) => ({
                ...prev,
                patient: {
                  ...prev.patient,
                  occupation: e.target.value,
                },
              }))
            }
            placeholder="e.g. Teacher"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Chief Complaint */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Chief Complaint
        </label>

        <textarea
          rows={4}
          value={caseData.patient.chiefComplaint}
          onChange={(e) =>
            setCaseData((prev: any) => ({
              ...prev,
              patient: {
                ...prev.patient,
                chiefComplaint:
                  e.target.value,
              },
            }))
          }
          placeholder="Describe the patient's primary complaint..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>
    </div>
  );
}