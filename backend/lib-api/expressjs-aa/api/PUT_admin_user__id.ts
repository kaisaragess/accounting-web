import { AdminUserPayload } from '../../ts-schema/AdminUserPayload'
import { User } from '../../ts-model/table/User'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class PUT_admin_user__id_Req_Paths {
  @IsOptional()
  @IsString({ message: 'id must be a string' })
  id!: string
}
class PUT_admin_user__id_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}
class PUT_admin_user__id_Req_Body {
  @IsNotEmpty({ message: 'data cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => AdminUserPayload)
  data!: AdminUserPayload
}

export class PUT_admin_user__id_Req {
  @Type(() => PUT_admin_user__id_Req_Paths)
  paths!: PUT_admin_user__id_Req_Paths
  @Type(() => PUT_admin_user__id_Req_Headers)
  headers!: PUT_admin_user__id_Req_Headers
  @Type(() => PUT_admin_user__id_Req_Body)
  body!: PUT_admin_user__id_Req_Body
}
export interface PUT_admin_user__id {
  endpoint: 'PUT /admin/user/:id'
  fn: (param: PUT_admin_user__id_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<User>
}
