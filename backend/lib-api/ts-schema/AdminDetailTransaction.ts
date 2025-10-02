import { Transaction } from '../ts-model/table/Transaction'
import { TransactionItem } from '../ts-model/table/TransactionItem'

import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class AdminDetailTransaction {
  @IsNotEmpty({ message: 'penjualan cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => Transaction)
  penjualan!: Transaction
  @IsNotEmpty({ message: 'list_item cannot be empty' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransactionItem)
  list_item!: TransactionItem[]
}