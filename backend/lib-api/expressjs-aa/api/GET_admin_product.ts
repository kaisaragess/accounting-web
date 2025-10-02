import { AdminProductResult } from '../../ts-schema/AdminProductResult'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class GET_admin_product_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}

export class GET_admin_product_Req {
  @Type(() => GET_admin_product_Req_Headers)
  headers!: GET_admin_product_Req_Headers
}
export interface GET_admin_product {
  endpoint: 'GET /admin/product'
  fn: (param: GET_admin_product_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<AdminProductResult>
}
