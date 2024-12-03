import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DialysisCenterWhereInput = {
  id?: StringFilter;
  seatCount?: IntNullableFilter;
  shiftMorning?: BooleanNullableFilter;
  shiftAfternoon?: BooleanNullableFilter;
  shiftEvening?: BooleanNullableFilter;
  availableAfternoonPlaces?: IntNullableFilter;
  availableEveningPlaces?: IntNullableFilter;
  availableMorningPlaces?: IntNullableFilter;
};
