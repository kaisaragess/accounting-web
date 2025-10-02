import { Transaction } from '../ts-model/table/Transaction'
import { TransactionItem } from '../ts-model/table/TransactionItem'

import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class DetailTransactionResponse {
  @IsNotEmpty({ message: 'transaction_header cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => Transaction)
  transaction_header!: Transaction
  @IsNotEmpty({ message: 'transaction_items cannot be empty' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransactionItem)
  transaction_items!: TransactionItem[]
}