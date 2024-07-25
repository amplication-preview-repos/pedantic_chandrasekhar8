import * as graphql from "@nestjs/graphql";
import { HealthcareProviderResolverBase } from "./base/healthcareProvider.resolver.base";
import { HealthcareProvider } from "./base/HealthcareProvider";
import { HealthcareProviderService } from "./healthcareProvider.service";

@graphql.Resolver(() => HealthcareProvider)
export class HealthcareProviderResolver extends HealthcareProviderResolverBase {
  constructor(protected readonly service: HealthcareProviderService) {
    super(service);
  }
}
