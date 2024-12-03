import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DialysisCenterConfigService } from "./dialysiscenterconfig.service";
import { BookingCreateInput } from "../booking/base/BookingCreateInput";

@swagger.ApiTags("dialysisCenterConfigs")
@common.Controller("dialysisCenterConfigs")
export class DialysisCenterConfigController {
  constructor(protected readonly service: DialysisCenterConfigService) {}

  @common.Put("/dialysis-center/config")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConfigureSeatsAndShifts(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConfigureSeatsAndShifts(body);
      }

  @common.Get("/dialysis-center/config")
  @swagger.ApiOkResponse({
    type: BookingCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewSeatsAndShifts(
    @common.Body()
    body: string
  ): Promise<BookingCreateInput> {
        return this.service.ViewSeatsAndShifts(body);
      }
}
