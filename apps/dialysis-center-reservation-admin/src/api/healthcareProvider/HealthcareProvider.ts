import { Booking } from "../booking/Booking";

export type HealthcareProvider = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  password: string | null;
  role?: "Option1" | null;
  bookings?: Array<Booking>;
};
