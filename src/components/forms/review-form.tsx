interface ReviewFormProps {
  caseData: any;
}

export function ReviewForm({
  caseData,
}: ReviewFormProps) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-8">
      <h2 className="mb-8 text-lg font-semibold text-slate-900">
        Review & Submit
      </h2>

      <div className="space-y-6">
        <div className="rounded-xl bg-slate-50 p-5">
          <h3 className="mb-4 font-semibold">
            Case Basics
          </h3>

          <div className="space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-medium">
                Title:
              </span>{" "}
              {caseData.title ||
                "Not provided"}
            </p>

            <p>
              <span className="font-medium">
                Specialty:
              </span>{" "}
              {caseData.specialty ||
                "Not provided"}
            </p>

            <p>
              <span className="font-medium">
                Difficulty:
              </span>{" "}
              {caseData.difficulty ||
                "Not provided"}
            </p>

            <p>
              <span className="font-medium">
                Description:
              </span>{" "}
              {caseData.description ||
                "Not provided"}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <h3 className="mb-4 font-semibold">
            Patient Information
          </h3>

          <div className="space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-medium">
                Name:
              </span>{" "}
              {caseData.patient.name ||
                "Not provided"}
            </p>

            <p>
              <span className="font-medium">
                Age:
              </span>{" "}
              {caseData.patient.age ||
                "Not provided"}
            </p>

            <p>
              <span className="font-medium">
                Gender:
              </span>{" "}
              {caseData.patient.gender ||
                "Not provided"}
            </p>

            <p>
              <span className="font-medium">
                Chief Complaint:
              </span>{" "}
              {caseData.patient
                .chiefComplaint ||
                "Not provided"}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <h3 className="mb-4 font-semibold">
            History
          </h3>

          <p className="text-sm text-slate-600">
            {caseData.history
              .presentIllness ||
              "Not provided"}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <h3 className="mb-4 font-semibold">
            Examination Findings
          </h3>

          <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
            <p>
              BP:{" "}
              {caseData.examination
                .bloodPressure ||
                "N/A"}
            </p>

            <p>
              HR:{" "}
              {caseData.examination
                .heartRate || "N/A"}
            </p>

            <p>
              Temp:{" "}
              {caseData.examination
                .temperature || "N/A"}
            </p>

            <p>
              RR:{" "}
              {caseData.examination
                .respiratoryRate ||
                "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}