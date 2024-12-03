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
import { HealthcareProviderService } from "../healthcareProvider.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HealthcareProviderCreateInput } from "./HealthcareProviderCreateInput";
import { HealthcareProvider } from "./HealthcareProvider";
import { HealthcareProviderFindManyArgs } from "./HealthcareProviderFindManyArgs";
import { HealthcareProviderWhereUniqueInput } from "./HealthcareProviderWhereUniqueInput";
import { HealthcareProviderUpdateInput } from "./HealthcareProviderUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { PatientCreateInput } from "../../patient/base/PatientCreateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HealthcareProviderControllerBase {
  constructor(
    protected readonly service: HealthcareProviderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HealthcareProvider })
  @nestAccessControl.UseRoles({
    resource: "HealthcareProvider",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHealthcareProvider(
    @common.Body() data: HealthcareProviderCreateInput
  ): Promise<HealthcareProvider> {
    return await this.service.createHealthcareProvider({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        password: true,
        role: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [HealthcareProvider] })
  @ApiNestedQuery(HealthcareProviderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HealthcareProvider",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthcareProviders(
    @common.Req() request: Request
  ): Promise<HealthcareProvider[]> {
    const args = plainToClass(HealthcareProviderFindManyArgs, request.query);
    return this.service.healthcareProviders({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        password: true,
        role: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HealthcareProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthcareProvider",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthcareProvider(
    @common.Param() params: HealthcareProviderWhereUniqueInput
  ): Promise<HealthcareProvider | null> {
    const result = await this.service.healthcareProvider({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        password: true,
        role: true,
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
  @swagger.ApiOkResponse({ type: HealthcareProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthcareProvider",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHealthcareProvider(
    @common.Param() params: HealthcareProviderWhereUniqueInput,
    @common.Body() data: HealthcareProviderUpdateInput
  ): Promise<HealthcareProvider | null> {
    try {
      return await this.service.updateHealthcareProvider({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          password: true,
          role: true,
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
  @swagger.ApiOkResponse({ type: HealthcareProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthcareProvider",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHealthcareProvider(
    @common.Param() params: HealthcareProviderWhereUniqueInput
  ): Promise<HealthcareProvider | null> {
    try {
      return await this.service.deleteHealthcareProvider({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          password: true,
          role: true,
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
    @common.Param() params: HealthcareProviderWhereUniqueInput
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
    resource: "HealthcareProvider",
    action: "update",
    possession: "any",
  })
  async connectBookings(
    @common.Param() params: HealthcareProviderWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateHealthcareProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "HealthcareProvider",
    action: "update",
    possession: "any",
  })
  async updateBookings(
    @common.Param() params: HealthcareProviderWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateHealthcareProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "HealthcareProvider",
    action: "update",
    possession: "any",
  })
  async disconnectBookings(
    @common.Param() params: HealthcareProviderWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateHealthcareProvider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/provider/login")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ProviderLogin(
    @common.Body()
    body: PatientCreateInput
  ): Promise<string> {
    return this.service.ProviderLogin(body);
  }

  @common.Post("/provider/register")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ProviderRegister(
    @common.Body()
    body: PatientCreateInput
  ): Promise<string> {
    return this.service.ProviderRegister(body);
  }
}
