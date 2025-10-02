import { User } from '../../ts-model/table/User'
import { MetodePembayaran } from '../../ts-model/enum/MetodePembayaran'

import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class Transaction {
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseInt(param.value))
  @IsNumber({}, { message: 'id must be a number (integer)' })
  id!: number
  otm_id_user!: User;
  id_user!: number
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseInt(param.value))
  @IsNumber({}, { message: 'total_amount must be a number (integer)' })
  total_amount!: number
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseInt(param.value))
  @IsNumber({}, { message: 'total_product_sold must be a number (integer)' })
  total_product_sold!: number
  @IsEnum(MetodePembayaran, { message: 'methode_payment must be enum MetodePembayaran' })
  methode_payment?: MetodePembayaran
  @Transform((param?: any): Date | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : new Date(param?.value))
  @IsISO8601({}, { message: 'transaction_date must be an ISO8601 date' })
  transaction_date!: Date
  @Transform((param?: any): boolean | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : (param?.value === 'true' || ((typeof param?.value === 'boolean') && param?.value)))
  @IsBoolean({ message: 'status must be a boolean' })
  status?: boolean
}