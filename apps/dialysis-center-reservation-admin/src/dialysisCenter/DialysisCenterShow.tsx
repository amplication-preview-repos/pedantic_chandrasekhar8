import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DialysisCenterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="seatCount" source="seatCount" />
        <BooleanField label="shiftMorning" source="shiftMorning" />
        <BooleanField label="shiftAfternoon" source="shiftAfternoon" />
        <BooleanField label="shiftEvening" source="shiftEvening" />
        <TextField
          label="availableAfternoonPlaces"
          source="availableAfternoonPlaces"
        />
        <TextField
          label="availableEveningPlaces"
          source="availableEveningPlaces"
        />
        <TextField
          label="availableMorningPlaces"
          source="availableMorningPlaces"
        />
      </SimpleShowLayout>
    </Show>
  );
};
