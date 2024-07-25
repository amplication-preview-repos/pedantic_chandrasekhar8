import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthcareProviderServiceBase } from "./base/healthcareProvider.service.base";

@Injectable()
export class HealthcareProviderService extends HealthcareProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
