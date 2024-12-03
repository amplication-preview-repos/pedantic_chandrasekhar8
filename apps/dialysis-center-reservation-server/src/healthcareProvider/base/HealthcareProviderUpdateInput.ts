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
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumHealthcareProviderRole } from "./EnumHealthcareProviderRole";
import { BookingUpdateManyWithoutHealthcareProvidersInput } from "./BookingUpdateManyWithoutHealthcareProvidersInput";
import { Type } from "class-transformer";

@InputType()
class HealthcareProviderUpdateInput {
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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
  password?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumHealthcareProviderRole,
  })
  @IsEnum(EnumHealthcareProviderRole)
  @IsOptional()
  @Field(() => EnumHealthcareProviderRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => BookingUpdateManyWithoutHealthcareProvidersInput,
  })
  @ValidateNested()
  @Type(() => BookingUpdateManyWithoutHealthcareProvidersInput)
  @IsOptional()
  @Field(() => BookingUpdateManyWithoutHealthcareProvidersInput, {
    nullable: true,
  })
  bookings?: BookingUpdateManyWithoutHealthcareProvidersInput;
}

export { HealthcareProviderUpdateInput as HealthcareProviderUpdateInput };
