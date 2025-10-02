import { AdminProductPayload } from '../../ts-schema/AdminProductPayload'
import { Product } from '../../ts-model/table/Product'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class POST_admin_product_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}
class POST_admin_product_Req_Body {
  @IsNotEmpty({ message: 'data cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => AdminProductPayload)
  data!: AdminProductPayload
}

export class POST_admin_product_Req {
  @Type(() => POST_admin_product_Req_Headers)
  headers!: POST_admin_product_Req_Headers
  @Type(() => POST_admin_product_Req_Body)
  body!: POST_admin_product_Req_Body
}
export interface POST_admin_product {
  endpoint: 'POST /admin/product'
  fn: (param: POST_admin_product_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<Product>
}
