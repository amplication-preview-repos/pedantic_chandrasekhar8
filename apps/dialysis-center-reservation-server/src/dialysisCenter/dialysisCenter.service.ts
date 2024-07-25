import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DialysisCenterServiceBase } from "./base/dialysisCenter.service.base";

@Injectable()
export class DialysisCenterService extends DialysisCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
