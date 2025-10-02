import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { PUT_admin_user__id_Req } from '../expressjs-aa/api/PUT_admin_user__id';
import { AdminUserPayload } from '../ts-schema/AdminUserPayload'
import { User } from '../ts-model/table/User'

export function implement_PUT_admin_user__id(engine: ExpressAA) {
  engine.implement({
    endpoint: 'PUT /admin/user/:id',
    async fn(param: PUT_admin_user__id_Req): Promise<User> {
      // 
      return {} as any;
    }
  });
}
