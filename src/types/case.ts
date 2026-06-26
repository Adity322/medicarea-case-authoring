export interface ClinicalCase {
  id: string;

  title: string;
  specialty: string;
  difficulty: string;
  description: string;

  patient: {
    name: string;
    age: string;
    gender: string;
    occupation: string;
    chiefComplaint: string;
  };

  history: {
    presentIllness: string;
    pastMedicalHistory: string;
    medicationHistory: string;
    familyHistory: string;
    socialHistory: string;
  };

  examination: {
    bloodPressure: string;
    heartRate: string;
    oxygenSaturation: string;
    temperature: string;
    respiratoryRate: string;
    generalExamination: string;
    cardiovascular: string;
    additionalFindings: string;
  };

  status: "draft" | "completed";

  createdAt: string;
  updatedAt: string;
}