import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HealthcareProviderService } from "./healthcareProvider.service";
import { HealthcareProviderControllerBase } from "./base/healthcareProvider.controller.base";

@swagger.ApiTags("healthcareProviders")
@common.Controller("healthcareProviders")
export class HealthcareProviderController extends HealthcareProviderControllerBase {
  constructor(protected readonly service: HealthcareProviderService) {
    super(service);
  }
}
