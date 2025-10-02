import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { GET_admin_user_Req } from '../expressjs-aa/api/GET_admin_user';
import { User } from "../model/table/User";
import { AdminUserResult } from '../ts-schema/AdminUserResult'

export function implement_GET_admin_user(engine: ExpressAA) {
  engine.implement({
    endpoint: 'GET /admin/user',
    async fn(param: GET_admin_user_Req): Promise<AdminUserResult> {
      // 
      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }

      try {
           const [users, totalCount] = await User.findAndCount({
          // Pilih hanya kolom yang aman untuk dikembalikan (password diabaikan)
          select: ["id", "fullname", "username", "role", "created_at"],
          order: {
            id: 'DESC'
          }
        });

        return {
          total: totalCount,
          data: users,
        };
      } catch (error: any) {
         throw new Error(error.message || "Gagal mengambil data pengguna.");
      }
    }
  });
}
