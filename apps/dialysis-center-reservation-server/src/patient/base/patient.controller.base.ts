/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PatientService } from "../patient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PatientCreateInput } from "./PatientCreateInput";
import { Patient } from "./Patient";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PatientControllerBase {
  constructor(
    protected readonly service: PatientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPatient(
    @common.Body() data: PatientCreateInput
  ): Promise<Patient> {
    return await this.service.createPatient({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        password: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async patients(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.patients({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        password: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async patient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.patient({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        password: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePatient(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.updatePatient({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          password: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePatient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.deletePatient({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          password: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        startDate: true,
        endDate: true,
        preferredShift: true,
        photoDialysisCard: true,
        telephoneContacts: true,
        medicalPrescription: true,

        patient: {
          select: {
            id: true,
          },
        },

        healthcareProvider: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async connectBookings(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async updateBookings(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async disconnectBookings(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async PatientLogin(
    @common.Body()
    body: PatientCreateInput
  ): Promise<string> {
    return this.service.PatientLogin(body);
  }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async PatientRegister(
    @common.Body()
    body: PatientCreateInput
  ): Promise<string> {
    return this.service.PatientRegister(body);
  }
}
