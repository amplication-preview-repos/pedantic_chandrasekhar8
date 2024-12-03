import { JsonValue } from "type-fest";
import { Patient } from "../patient/Patient";
import { HealthcareProvider } from "../healthcareProvider/HealthcareProvider";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  preferredShift?: "Option1" | null;
  photoDialysisCard: JsonValue;
  telephoneContacts: string | null;
  medicalPrescription: JsonValue;
  patient?: Patient | null;
  healthcareProvider?: HealthcareProvider | null;
};
