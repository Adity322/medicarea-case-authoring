"use client";

import { useEffect, useState } from "react";
import { getCompletedCases } from "@/lib/storage";
import { CheckCircle2 } from "lucide-react";

export default function CompletedPage() {
  const [cases, setCases] =
    useState<any[]>([]);

  useEffect(() => {
    setCases(
      getCompletedCases()
    );
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Completed Cases
        </h1>

        <p className="mt-2 text-slate-500">
          View submitted clinical
          simulations.
        </p>
      </div>

      {cases.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-slate-400" />

          <h2 className="text-lg font-medium text-slate-700">
            No Completed Cases
          </h2>

          <p className="mt-2 text-slate-500">
            Submitted cases will appear
            here.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {cases.map(
            (item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/70 bg-white p-6"
              >
                <h2 className="text-lg font-semibold">
                  {item.title ||
                    "Untitled Case"}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.specialty ||
                    "No specialty"}
                </p>

                <p className="mt-4 text-sm text-slate-500">
                  Patient:
                  {" "}
                  {item.patient?.name ||
                    "Not provided"}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  Submitted:
                  {" "}
                  {new Date(
                    item.submittedAt
                  ).toLocaleString()}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}