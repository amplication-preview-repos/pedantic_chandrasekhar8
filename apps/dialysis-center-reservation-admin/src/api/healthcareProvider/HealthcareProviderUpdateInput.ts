import { BookingUpdateManyWithoutHealthcareProvidersInput } from "./BookingUpdateManyWithoutHealthcareProvidersInput";

export type HealthcareProviderUpdateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  role?: "Option1" | null;
  bookings?: BookingUpdateManyWithoutHealthcareProvidersInput;
};
