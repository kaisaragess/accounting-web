import { AdminProductPayload } from '../../ts-schema/AdminProductPayload'
import { Product } from '../../ts-model/table/Product'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class PUT_admin_product__id_Req_Paths {
  @IsOptional()
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'id must be a number (decimal)' })
  id!: number
}
class PUT_admin_product__id_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}
class PUT_admin_product__id_Req_Body {
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => AdminProductPayload)
  data?: AdminProductPayload
}

export class PUT_admin_product__id_Req {
  @Type(() => PUT_admin_product__id_Req_Paths)
  paths!: PUT_admin_product__id_Req_Paths
  @Type(() => PUT_admin_product__id_Req_Headers)
  headers!: PUT_admin_product__id_Req_Headers
  @Type(() => PUT_admin_product__id_Req_Body)
  body!: PUT_admin_product__id_Req_Body
}
export interface PUT_admin_product__id {
  endpoint: 'PUT /admin/product/:id'
  fn: (param: PUT_admin_product__id_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<Product>
}
