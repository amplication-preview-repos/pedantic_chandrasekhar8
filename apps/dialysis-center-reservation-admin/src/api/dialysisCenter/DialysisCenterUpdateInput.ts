export type DialysisCenterUpdateInput = {
  seatCount?: number | null;
  shiftMorning?: boolean | null;
  shiftAfternoon?: boolean | null;
  shiftEvening?: boolean | null;
  availableAfternoonPlaces?: number | null;
  availableEveningPlaces?: number | null;
  availableMorningPlaces?: number | null;
};
