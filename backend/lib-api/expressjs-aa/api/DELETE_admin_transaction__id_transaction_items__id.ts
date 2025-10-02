import { DelTransactionItem } from '../../ts-schema/DelTransactionItem'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class DELETE_admin_transaction__id_transaction_items__id_Req_Paths {
  @IsOptional()
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'id must be a number (decimal)' })
  id!: number
  @IsOptional()
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'id_transaction must be a number (decimal)' })
  id_transaction!: number
}
class DELETE_admin_transaction__id_transaction_items__id_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}

export class DELETE_admin_transaction__id_transaction_items__id_Req {
  @Type(() => DELETE_admin_transaction__id_transaction_items__id_Req_Paths)
  paths!: DELETE_admin_transaction__id_transaction_items__id_Req_Paths
  @Type(() => DELETE_admin_transaction__id_transaction_items__id_Req_Headers)
  headers!: DELETE_admin_transaction__id_transaction_items__id_Req_Headers
}
export interface DELETE_admin_transaction__id_transaction_items__id {
  endpoint: 'DELETE /admin/transaction/:id_transaction/items/:id'
  fn: (param: DELETE_admin_transaction__id_transaction_items__id_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<DelTransactionItem>
}
