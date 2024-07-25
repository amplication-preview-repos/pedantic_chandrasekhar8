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
import { DialysisCenterService } from "../dialysisCenter.service";
import { DialysisCenterCreateInput } from "./DialysisCenterCreateInput";
import { DialysisCenter } from "./DialysisCenter";
import { DialysisCenterFindManyArgs } from "./DialysisCenterFindManyArgs";
import { DialysisCenterWhereUniqueInput } from "./DialysisCenterWhereUniqueInput";
import { DialysisCenterUpdateInput } from "./DialysisCenterUpdateInput";

export class DialysisCenterControllerBase {
  constructor(protected readonly service: DialysisCenterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DialysisCenter })
  async createDialysisCenter(
    @common.Body() data: DialysisCenterCreateInput
  ): Promise<DialysisCenter> {
    return await this.service.createDialysisCenter({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        seatCount: true,
        shiftMorning: true,
        shiftAfternoon: true,
        shiftEvening: true,
        availableAfternoonPlaces: true,
        availableEveningPlaces: true,
        availableMorningPlaces: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DialysisCenter] })
  @ApiNestedQuery(DialysisCenterFindManyArgs)
  async dialysisCenters(
    @common.Req() request: Request
  ): Promise<DialysisCenter[]> {
    const args = plainToClass(DialysisCenterFindManyArgs, request.query);
    return this.service.dialysisCenters({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        seatCount: true,
        shiftMorning: true,
        shiftAfternoon: true,
        shiftEvening: true,
        availableAfternoonPlaces: true,
        availableEveningPlaces: true,
        availableMorningPlaces: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DialysisCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dialysisCenter(
    @common.Param() params: DialysisCenterWhereUniqueInput
  ): Promise<DialysisCenter | null> {
    const result = await this.service.dialysisCenter({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        seatCount: true,
        shiftMorning: true,
        shiftAfternoon: true,
        shiftEvening: true,
        availableAfternoonPlaces: true,
        availableEveningPlaces: true,
        availableMorningPlaces: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DialysisCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDialysisCenter(
    @common.Param() params: DialysisCenterWhereUniqueInput,
    @common.Body() data: DialysisCenterUpdateInput
  ): Promise<DialysisCenter | null> {
    try {
      return await this.service.updateDialysisCenter({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          seatCount: true,
          shiftMorning: true,
          shiftAfternoon: true,
          shiftEvening: true,
          availableAfternoonPlaces: true,
          availableEveningPlaces: true,
          availableMorningPlaces: true,
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
  @swagger.ApiOkResponse({ type: DialysisCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDialysisCenter(
    @common.Param() params: DialysisCenterWhereUniqueInput
  ): Promise<DialysisCenter | null> {
    try {
      return await this.service.deleteDialysisCenter({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          seatCount: true,
          shiftMorning: true,
          shiftAfternoon: true,
          shiftEvening: true,
          availableAfternoonPlaces: true,
          availableEveningPlaces: true,
          availableMorningPlaces: true,
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
}
