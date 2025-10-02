
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class AdminProductPayload {
  @IsNotEmpty({ message: 'category cannot be empty' })
  @IsString({ message: 'category must be a string' })
  category!: string
  @IsNotEmpty({ message: 'name cannot be empty' })
  @IsString({ message: 'name must be a string' })
  name!: string
  @IsNotEmpty({ message: 'price cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'price must be a number (decimal)' })
  price!: number
  @IsNotEmpty({ message: 'imgurl cannot be empty' })
  @IsString({ message: 'imgurl must be a string' })
  imgurl!: string
  @IsNotEmpty({ message: 'description cannot be empty' })
  @IsString({ message: 'description must be a string' })
  description!: string
  @IsNotEmpty({ message: 'quantity cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'quantity must be a number (decimal)' })
  quantity!: number
}