import { Product } from '../../ts-model/table/Product'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class DELETE_admin_product__id_Req_Paths {
  @IsOptional()
  @IsString({ message: 'id must be a string' })
  id!: string
}
class DELETE_admin_product__id_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}

export class DELETE_admin_product__id_Req {
  @Type(() => DELETE_admin_product__id_Req_Paths)
  paths!: DELETE_admin_product__id_Req_Paths
  @Type(() => DELETE_admin_product__id_Req_Headers)
  headers!: DELETE_admin_product__id_Req_Headers
}
export interface DELETE_admin_product__id {
  endpoint: 'DELETE /admin/product/:id'
  fn: (param: DELETE_admin_product__id_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<Product>
}
