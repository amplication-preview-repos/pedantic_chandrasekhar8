/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumBookingPreferredShift } from "./EnumBookingPreferredShift";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { HealthcareProviderWhereUniqueInput } from "../../healthcareProvider/base/HealthcareProviderWhereUniqueInput";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumBookingPreferredShift,
  })
  @IsEnum(EnumBookingPreferredShift)
  @IsOptional()
  @Field(() => EnumBookingPreferredShift, {
    nullable: true,
  })
  preferredShift?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  photoDialysisCard?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telephoneContacts?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  medicalPrescription?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => PatientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientWhereUniqueInput)
  @IsOptional()
  @Field(() => PatientWhereUniqueInput, {
    nullable: true,
  })
  patient?: PatientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => HealthcareProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HealthcareProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => HealthcareProviderWhereUniqueInput, {
    nullable: true,
  })
  healthcareProvider?: HealthcareProviderWhereUniqueInput | null;
}

export { BookingCreateInput as BookingCreateInput };
