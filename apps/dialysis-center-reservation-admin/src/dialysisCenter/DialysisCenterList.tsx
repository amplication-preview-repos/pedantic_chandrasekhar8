import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DialysisCenterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DialysisCenters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
