import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { HEALTHCAREPROVIDER_TITLE_FIELD } from "../healthcareProvider/HealthcareProviderTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="startDate" source="startDate" />
        <TextField label="endDate" source="endDate" />
        <TextField label="preferredShift" source="preferredShift" />
        <TextField label="photoDialysisCard" source="photoDialysisCard" />
        <TextField label="telephoneContacts" source="telephoneContacts" />
        <TextField label="medicalPrescription" source="medicalPrescription" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="HealthcareProvider"
          source="healthcareprovider.id"
          reference="HealthcareProvider"
        >
          <TextField source={HEALTHCAREPROVIDER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
