import { Module } from "@nestjs/common";
import { DialysisCenterModuleBase } from "./base/dialysisCenter.module.base";
import { DialysisCenterService } from "./dialysisCenter.service";
import { DialysisCenterController } from "./dialysisCenter.controller";
import { DialysisCenterResolver } from "./dialysisCenter.resolver";

@Module({
  imports: [DialysisCenterModuleBase],
  controllers: [DialysisCenterController],
  providers: [DialysisCenterService, DialysisCenterResolver],
  exports: [DialysisCenterService],
})
export class DialysisCenterModule {}
