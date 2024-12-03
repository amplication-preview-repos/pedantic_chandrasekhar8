import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { HealthcareProviderWhereUniqueInput } from "../healthcareProvider/HealthcareProviderWhereUniqueInput";

export type BookingUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  preferredShift?: "Option1" | null;
  photoDialysisCard?: InputJsonValue;
  telephoneContacts?: string | null;
  medicalPrescription?: InputJsonValue;
  patient?: PatientWhereUniqueInput | null;
  healthcareProvider?: HealthcareProviderWhereUniqueInput | null;
};
