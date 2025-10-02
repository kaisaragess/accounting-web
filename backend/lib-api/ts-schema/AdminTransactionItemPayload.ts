
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class AdminTransactionItemPayload {
  @IsNotEmpty({ message: 'id_transaction cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'id_transaction must be a number (decimal)' })
  id_transaction!: number
  @IsNotEmpty({ message: 'id_product cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'id_product must be a number (decimal)' })
  id_product!: number
  @IsNotEmpty({ message: 'price_per_item cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'price_per_item must be a number (decimal)' })
  price_per_item!: number
  @IsNotEmpty({ message: 'quantity cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'quantity must be a number (decimal)' })
  quantity!: number
  @IsNotEmpty({ message: 'subtotal cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'subtotal must be a number (decimal)' })
  subtotal!: number
}