import { BookingUpdateManyWithoutPatientsInput } from "./BookingUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  bookings?: BookingUpdateManyWithoutPatientsInput;
};
