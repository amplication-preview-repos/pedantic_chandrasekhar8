import { SortOrder } from "../../util/SortOrder";

export type DialysisCenterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  seatCount?: SortOrder;
  shiftMorning?: SortOrder;
  shiftAfternoon?: SortOrder;
  shiftEvening?: SortOrder;
  availableAfternoonPlaces?: SortOrder;
  availableEveningPlaces?: SortOrder;
  availableMorningPlaces?: SortOrder;
};
