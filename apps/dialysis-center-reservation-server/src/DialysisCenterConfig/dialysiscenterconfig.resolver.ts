import * as graphql from "@nestjs/graphql";
import { BookingUpdateInput } from "../booking/base/BookingUpdateInput";
import { BookingCreateInput } from "../booking/base/BookingCreateInput";
import { DialysisCenterConfigService } from "./dialysiscenterconfig.service";

export class DialysisCenterConfigResolver {
  constructor(protected readonly service: DialysisCenterConfigService) {}

  @graphql.Mutation(() => String)
  async ConfigureSeatsAndShifts(
    @graphql.Args()
    args: BookingUpdateInput
  ): Promise<string> {
    return this.service.ConfigureSeatsAndShifts(args);
  }

  @graphql.Query(() => BookingCreateInput)
  async ViewSeatsAndShifts(
    @graphql.Args()
    args: string
  ): Promise<BookingCreateInput> {
    return this.service.ViewSeatsAndShifts(args);
  }
}
