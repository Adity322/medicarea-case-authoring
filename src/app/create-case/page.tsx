"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Stepper } from "@/components/forms/stepper";
import { BasicInfoForm } from "@/components/forms/basic-info-form";
import { PatientDetailsForm } from "@/components/forms/patient-details-form";
import { HistoryForm } from "@/components/forms/history-form";
import { ExaminationForm } from "@/components/forms/examination-form";
import { ReviewForm } from "@/components/forms/review-form";

import {
  saveDraft,
  getDraft,
  clearDraft,
  saveCompletedCase,
} from "@/lib/storage";

export default function CreateCasePage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] =
    useState(0);

  const [caseData, setCaseData] =
    useState({
      title: "",
      specialty: "",
      difficulty: "",
      caseId: "",
      description: "",

      patient: {
        name: "",
        age: "",
        gender: "",
        occupation: "",
        chiefComplaint: "",
      },

      history: {
        presentIllness: "",
        pastMedicalHistory: "",
        medicationHistory: "",
        familyHistory: "",
        socialHistory: "",
      },

      examination: {
        bloodPressure: "",
        heartRate: "",
        temperature: "",
        respiratoryRate: "",
        generalExamination: "",
        additionalFindings: "",
      },
    });

  useEffect(() => {
    const draft = getDraft();

    if (draft) {
      setCaseData(draft);
      toast.success("Draft restored");
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">
          New Clinical Case
        </h1>

        <p className="mt-2 text-slate-500">
          Fill in each section to build a
          structured simulation case.
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Step {currentStep + 1} of 5
        </p>

        <p className="text-sm font-medium text-blue-600">
          {Math.round(
            ((currentStep + 1) / 5) * 100
          )}
          % Complete
        </p>
      </div>

      {/* Stepper */}
      <Stepper
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />

      {/* Forms */}
      {currentStep === 0 && (
        <BasicInfoForm
          caseData={caseData}
          setCaseData={setCaseData}
        />
      )}

      {currentStep === 1 && (
        <PatientDetailsForm
          caseData={caseData}
          setCaseData={setCaseData}
        />
      )}

      {currentStep === 2 && (
        <HistoryForm
          caseData={caseData}
          setCaseData={setCaseData}
        />
      )}

      {currentStep === 3 && (
        <ExaminationForm
          caseData={caseData}
          setCaseData={setCaseData}
        />
      )}

      {currentStep === 4 && (
        <ReviewForm
          caseData={caseData}
        />
      )}

      {/* Footer */}
      <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-6">
        <button
          onClick={() =>
            setCurrentStep((prev) =>
              Math.max(prev - 1, 0)
            )
          }
          disabled={currentStep === 0}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium disabled:opacity-50"
        >
          ← Back
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => {
              saveDraft(caseData);

              toast.success(
                "Draft saved successfully"
              );
            }}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium"
          >
            Save Draft
          </button>

          <button
            onClick={() => {
              if (currentStep === 4) {
                saveCompletedCase(
                  caseData
                );

                clearDraft();

                toast.success(
                  "Clinical case submitted successfully!"
                );

                router.push(
                  "/completed"
                );

                return;
              }

              setCurrentStep((prev) =>
                Math.min(prev + 1, 4)
              );
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            {currentStep === 4
              ? "Submit Case"
              : "Next Step →"}
          </button>
        </div>
      </div>
    </div>
  );
}