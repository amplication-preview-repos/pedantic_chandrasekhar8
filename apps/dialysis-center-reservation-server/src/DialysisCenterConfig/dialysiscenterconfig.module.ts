import { Module } from "@nestjs/common";
import { DialysisCenterConfigService } from "./dialysiscenterconfig.service";
import { DialysisCenterConfigController } from "./dialysiscenterconfig.controller";
import { DialysisCenterConfigResolver } from "./dialysiscenterconfig.resolver";

@Module({
  controllers: [DialysisCenterConfigController],
  providers: [DialysisCenterConfigService, DialysisCenterConfigResolver],
  exports: [DialysisCenterConfigService],
})
export class DialysisCenterConfigModule {}
