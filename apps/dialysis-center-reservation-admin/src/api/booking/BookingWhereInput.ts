import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { HealthcareProviderWhereUniqueInput } from "../healthcareProvider/HealthcareProviderWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  preferredShift?: "Option1";
  photoDialysisCard?: JsonFilter;
  telephoneContacts?: StringNullableFilter;
  medicalPrescription?: JsonFilter;
  patient?: PatientWhereUniqueInput;
  healthcareProvider?: HealthcareProviderWhereUniqueInput;
};
