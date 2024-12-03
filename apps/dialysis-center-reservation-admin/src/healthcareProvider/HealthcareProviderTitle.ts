import { HealthcareProvider as THealthcareProvider } from "../api/healthcareProvider/HealthcareProvider";

export const HEALTHCAREPROVIDER_TITLE_FIELD = "name";

export const HealthcareProviderTitle = (
  record: THealthcareProvider
): string => {
  return record.name?.toString() || String(record.id);
};
