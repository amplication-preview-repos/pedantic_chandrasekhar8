import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "telephoneContacts";

export const BookingTitle = (record: TBooking): string => {
  return record.telephoneContacts?.toString() || String(record.id);
};
