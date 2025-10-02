import { Transaction } from '../ts-model/table/Transaction'
import { TransactionItem } from '../ts-model/table/TransactionItem'

import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class DelTransactionItem {
  @IsNotEmpty({ message: 'transaksi cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => Transaction)
  transaksi!: Transaction
  @IsNotEmpty({ message: 'items cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => TransactionItem)
  items!: TransactionItem
}