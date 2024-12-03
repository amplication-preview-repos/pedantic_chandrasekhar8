import { HealthcareProviderWhereInput } from "./HealthcareProviderWhereInput";
import { HealthcareProviderOrderByInput } from "./HealthcareProviderOrderByInput";

export type HealthcareProviderFindManyArgs = {
  where?: HealthcareProviderWhereInput;
  orderBy?: Array<HealthcareProviderOrderByInput>;
  skip?: number;
  take?: number;
};
