import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { HealthcareProviderTitle } from "../healthcareProvider/HealthcareProviderTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="startDate" source="startDate" />
        <DateTimeInput label="endDate" source="endDate" />
        <SelectInput
          source="preferredShift"
          label="preferredShift"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <TextInput label="telephoneContacts" source="telephoneContacts" />
        <div />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="healthcareProvider.id"
          reference="HealthcareProvider"
          label="HealthcareProvider"
        >
          <SelectInput optionText={HealthcareProviderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
