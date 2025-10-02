import { AdminUserResult } from '../../ts-schema/AdminUserResult'
import { Utility } from '../Utility';
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

class GET_admin_user_Req_Headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}

export class GET_admin_user_Req {
  @Type(() => GET_admin_user_Req_Headers)
  headers!: GET_admin_user_Req_Headers
}
export interface GET_admin_user {
  endpoint: 'GET /admin/user'
  fn: (param: GET_admin_user_Req, Error: (param: Utility.ErrorParam<string>) => Utility.ErrorParam<string>) => Promise<AdminUserResult>
}
