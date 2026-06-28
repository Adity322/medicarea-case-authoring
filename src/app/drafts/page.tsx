"use client";

import { useEffect, useState } from "react";
import { getDraft } from "@/lib/storage";
import { FileText } from "lucide-react";

export default function DraftsPage() {
  const [draft, setDraft] =
    useState<any>(null);

  useEffect(() => {
    setDraft(getDraft());
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Drafts
        </h1>

        <p className="mt-2 text-slate-500">
          Continue working on your
          unfinished clinical cases.
        </p>
      </div>

      {!draft ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <FileText className="mx-auto mb-4 h-10 w-10 text-slate-400" />

          <h2 className="text-lg font-medium text-slate-700">
            No Draft Available
          </h2>

          <p className="mt-2 text-slate-500">
            Saved drafts will appear here.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6">
          <h2 className="text-xl font-semibold">
            {draft.title ||
              "Untitled Case"}
          </h2>

          <p className="mt-2 text-slate-500">
            {draft.specialty ||
              "No specialty selected"}
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Patient:
            {" "}
            {draft.patient?.name ||
              "Not provided"}
          </p>
        </div>
      )}
    </div>
  );
}