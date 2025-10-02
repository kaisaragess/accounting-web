
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class AdminUserPayload {
  @IsNotEmpty({ message: 'fullname cannot be empty' })
  @IsString({ message: 'fullname must be a string' })
  fullname!: string
  @IsNotEmpty({ message: 'username cannot be empty' })
  @IsString({ message: 'username must be a string' })
  username!: string
  @IsNotEmpty({ message: 'password cannot be empty' })
  @IsString({ message: 'password must be a string' })
  password!: string
  @IsNotEmpty({ message: 'role cannot be empty' })
  @IsString({ message: 'role must be a string' })
  role!: string
}