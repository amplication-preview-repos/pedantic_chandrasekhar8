import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DialysisCenterService } from "./dialysisCenter.service";
import { DialysisCenterControllerBase } from "./base/dialysisCenter.controller.base";

@swagger.ApiTags("dialysisCenters")
@common.Controller("dialysisCenters")
export class DialysisCenterController extends DialysisCenterControllerBase {
  constructor(protected readonly service: DialysisCenterService) {
    super(service);
  }
}
