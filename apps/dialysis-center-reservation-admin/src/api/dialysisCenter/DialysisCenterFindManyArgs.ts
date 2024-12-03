import { DialysisCenterWhereInput } from "./DialysisCenterWhereInput";
import { DialysisCenterOrderByInput } from "./DialysisCenterOrderByInput";

export type DialysisCenterFindManyArgs = {
  where?: DialysisCenterWhereInput;
  orderBy?: Array<DialysisCenterOrderByInput>;
  skip?: number;
  take?: number;
};
