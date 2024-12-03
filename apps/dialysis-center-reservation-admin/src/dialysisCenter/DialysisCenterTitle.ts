import { DialysisCenter as TDialysisCenter } from "../api/dialysisCenter/DialysisCenter";

export const DIALYSISCENTER_TITLE_FIELD = "id";

export const DialysisCenterTitle = (record: TDialysisCenter): string => {
  return record.id?.toString() || String(record.id);
};
