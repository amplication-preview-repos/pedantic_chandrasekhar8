import { Module } from "@nestjs/common";
import { HealthcareProviderModuleBase } from "./base/healthcareProvider.module.base";
import { HealthcareProviderService } from "./healthcareProvider.service";
import { HealthcareProviderController } from "./healthcareProvider.controller";
import { HealthcareProviderResolver } from "./healthcareProvider.resolver";

@Module({
  imports: [HealthcareProviderModuleBase],
  controllers: [HealthcareProviderController],
  providers: [HealthcareProviderService, HealthcareProviderResolver],
  exports: [HealthcareProviderService],
})
export class HealthcareProviderModule {}
