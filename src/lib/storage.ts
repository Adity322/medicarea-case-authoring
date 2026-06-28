export const DRAFT_KEY =
  "medicarea-active-draft";

export const COMPLETED_KEY =
  "medicarea-completed-cases";

export function saveDraft(data: unknown) {
  localStorage.setItem(
    DRAFT_KEY,
    JSON.stringify(data)
  );
}

export function getDraft() {
  const draft =
    localStorage.getItem(DRAFT_KEY);

  if (!draft) return null;

  return JSON.parse(draft);
}

export function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}

export function saveCompletedCase(
  data: unknown
) {
  const existing = JSON.parse(
    localStorage.getItem(
      COMPLETED_KEY
    ) ?? "[]"
  );

  existing.push({
     data,
    submittedAt:
      new Date().toISOString(),
  });

  localStorage.setItem(
    COMPLETED_KEY,
    JSON.stringify(existing)
  );
}

export function getCompletedCases() {
  return JSON.parse(
    localStorage.getItem(
      COMPLETED_KEY
    ) ?? "[]"
  );
}