import { BookingCreateNestedManyWithoutPatientsInput } from "./BookingCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  bookings?: BookingCreateNestedManyWithoutPatientsInput;
};
