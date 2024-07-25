import { Injectable } from "@nestjs/common";
import { BookingUpdateInput } from "../booking/base/BookingUpdateInput";
import { BookingCreateInput } from "../booking/base/BookingCreateInput";

@Injectable()
export class DialysisCenterConfigService {
  constructor() {}
  async ConfigureSeatsAndShifts(args: BookingUpdateInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ViewSeatsAndShifts(args: string): Promise<BookingCreateInput> {
    throw new Error("Not implemented");
  }
}
