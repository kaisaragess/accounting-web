import { TransactionItem } from '../ts-model/table/TransactionItem'

import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class AdminTransactionPayload {
  @IsNotEmpty({ message: 'id_user cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'id_user must be a number (decimal)' })
  id_user!: number
  @IsNotEmpty({ message: 'total_amount cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'total_amount must be a number (decimal)' })
  total_amount!: number
  @IsNotEmpty({ message: 'total_product_sold cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'total_product_sold must be a number (decimal)' })
  total_product_sold!: number
  @IsNotEmpty({ message: 'methode_payment cannot be empty' })
  @IsString({ message: 'methode_payment must be a string' })
  methode_payment!: string
  @IsNotEmpty({ message: 'transaction_date cannot be empty' })
  @IsString({ message: 'transaction_date must be a string' })
  transaction_date!: string
  @IsNotEmpty({ message: 'status cannot be empty' })
  @Transform((param?: any): boolean | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : (param?.value === 'true' || ((typeof param?.value === 'boolean') && param?.value)))
  @IsBoolean({ message: 'status must be a boolean' })
  status!: boolean
  @IsNotEmpty({ message: 'item cannot be empty' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransactionItem)
  item!: TransactionItem[]
}