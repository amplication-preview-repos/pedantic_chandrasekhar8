import { SortOrder } from "../../util/SortOrder";

export type HealthcareProviderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
};
