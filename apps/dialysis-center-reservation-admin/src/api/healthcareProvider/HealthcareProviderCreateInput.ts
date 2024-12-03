import { BookingCreateNestedManyWithoutHealthcareProvidersInput } from "./BookingCreateNestedManyWithoutHealthcareProvidersInput";

export type HealthcareProviderCreateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  role?: "Option1" | null;
  bookings?: BookingCreateNestedManyWithoutHealthcareProvidersInput;
};
