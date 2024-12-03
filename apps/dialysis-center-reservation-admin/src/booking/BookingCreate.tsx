import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { HealthcareProviderTitle } from "../healthcareProvider/HealthcareProviderTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
