import { Booking } from "../booking/Booking";

export type Patient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  password: string | null;
  bookings?: Array<Booking>;
};
