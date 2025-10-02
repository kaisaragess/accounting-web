import { AdminTransactionPayload } from '../../ts-schema/AdminTransactionPayload'
import { AdminDetailTransaction } from '../../ts-schema/AdminDetailTransaction'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class POST_admin_transaction_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}
class POST_admin_transaction_Req_Body {
  @IsNotEmpty({ message: 'data cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => AdminTransactionPayload)
  data!: AdminTransactionPayload
}

export class POST_admin_transaction_Req {
  @Type(() => POST_admin_transaction_Req_Headers)
  headers!: POST_admin_transaction_Req_Headers
  @Type(() => POST_admin_transaction_Req_Body)
  body!: POST_admin_transaction_Req_Body
}
export interface POST_admin_transaction {
  endpoint: 'POST /admin/transaction'
  fn: (param: POST_admin_transaction_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<AdminDetailTransaction>
}
