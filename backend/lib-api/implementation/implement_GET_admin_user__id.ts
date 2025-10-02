import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { GET_admin_user__id_Req } from '../expressjs-aa/api/GET_admin_user__id';
import { User } from '../model/table/User'

export function implement_GET_admin_user__id(engine: ExpressAA) {
  engine.implement({
    endpoint: 'GET /admin/user/:id',
    async fn(param: GET_admin_user__id_Req): Promise<User> {
      // 

      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }

      const { id } = param.paths;
      
      try { 
        const user = await User.findOneBy({ 
          id: Number(id) 
        });
        if (!user) {
          throw new Error(`User dengan ID ${id} tidak ditemukan.`);
        }

        return user;
        
      } catch (error: any) {
        throw new Error(error.message || "Gagal mengambil detail user.");
      } 
    }
  });
}
