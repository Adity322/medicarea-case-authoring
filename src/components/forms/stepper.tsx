interface StepperProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

const steps = [
  "Basic Info",
  "Patient Details",
  "History",
  "Examination",
  "Review",
];

export function Stepper({
  currentStep,
  onStepChange,
}: StepperProps) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-8">
      <div className="mb-8 flex items-center justify-between">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <button
              key={step}
              type="button"
              onClick={() => onStepChange(index)}
              className="flex flex-col items-center"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors
                  ${
                    completed
                      ? "border-blue-600 bg-blue-600 text-white"
                      : active
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-slate-300 text-slate-400"
                  }`}
              >
                {completed ? "✓" : index + 1}
              </div>

              <span
                className={`mt-2 text-xs ${
                  active
                    ? "text-blue-600"
                    : "text-slate-500"
                }`}
              >
                {step}
              </span>
            </button>
          );
        })}
      </div>

      <div className="h-2 rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${
              ((currentStep + 1) / steps.length) * 100
            }%`,
          }}
        />
      </div>
    </div>
  );
}