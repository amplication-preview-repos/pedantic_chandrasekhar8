import * as graphql from "@nestjs/graphql";
import { DialysisCenterResolverBase } from "./base/dialysisCenter.resolver.base";
import { DialysisCenter } from "./base/DialysisCenter";
import { DialysisCenterService } from "./dialysisCenter.service";

@graphql.Resolver(() => DialysisCenter)
export class DialysisCenterResolver extends DialysisCenterResolverBase {
  constructor(protected readonly service: DialysisCenterService) {
    super(service);
  }
}
