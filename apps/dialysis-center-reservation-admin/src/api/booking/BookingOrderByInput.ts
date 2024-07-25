import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  preferredShift?: SortOrder;
  photoDialysisCard?: SortOrder;
  telephoneContacts?: SortOrder;
  medicalPrescription?: SortOrder;
  patientId?: SortOrder;
  healthcareProviderId?: SortOrder;
};
