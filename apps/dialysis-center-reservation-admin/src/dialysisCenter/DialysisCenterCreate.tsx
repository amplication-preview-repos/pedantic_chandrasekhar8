import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const DialysisCenterCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="seatCount" source="seatCount" />
        <BooleanInput label="shiftMorning" source="shiftMorning" />
        <BooleanInput label="shiftAfternoon" source="shiftAfternoon" />
        <BooleanInput label="shiftEvening" source="shiftEvening" />
        <NumberInput
          step={1}
          label="availableAfternoonPlaces"
          source="availableAfternoonPlaces"
        />
        <NumberInput
          step={1}
          label="availableEveningPlaces"
          source="availableEveningPlaces"
        />
        <NumberInput
          step={1}
          label="availableMorningPlaces"
          source="availableMorningPlaces"
        />
      </SimpleForm>
    </Create>
  );
};
