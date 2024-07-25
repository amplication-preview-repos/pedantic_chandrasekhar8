/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Patient } from "./Patient";
import { PatientCountArgs } from "./PatientCountArgs";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientFindUniqueArgs } from "./PatientFindUniqueArgs";
import { CreatePatientArgs } from "./CreatePatientArgs";
import { UpdatePatientArgs } from "./UpdatePatientArgs";
import { DeletePatientArgs } from "./DeletePatientArgs";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { PatientCreateInput } from "./PatientCreateInput";
import { PatientService } from "../patient.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Patient)
export class PatientResolverBase {
  constructor(
    protected readonly service: PatientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async _patientsMeta(
    @graphql.Args() args: PatientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Patient])
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async patients(
    @graphql.Args() args: PatientFindManyArgs
  ): Promise<Patient[]> {
    return this.service.patients(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Patient, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "own",
  })
  async patient(
    @graphql.Args() args: PatientFindUniqueArgs
  ): Promise<Patient | null> {
    const result = await this.service.patient(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Patient)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "create",
    possession: "any",
  })
  async createPatient(
    @graphql.Args() args: CreatePatientArgs
  ): Promise<Patient> {
    return await this.service.createPatient({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Patient)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async updatePatient(
    @graphql.Args() args: UpdatePatientArgs
  ): Promise<Patient | null> {
    try {
      return await this.service.updatePatient({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Patient)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "delete",
    possession: "any",
  })
  async deletePatient(
    @graphql.Args() args: DeletePatientArgs
  ): Promise<Patient | null> {
    try {
      return await this.service.deletePatient(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @graphql.Parent() parent: Patient,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => String)
  async PatientLogin(
    @graphql.Args()
    args: CreatePatientArgs
  ): Promise<string> {
    return this.service.PatientLogin(args);
  }

  @graphql.Mutation(() => String)
  async PatientRegister(
    @graphql.Args()
    args: PatientCreateInput
  ): Promise<string> {
    return this.service.PatientRegister(args);
  }
}
