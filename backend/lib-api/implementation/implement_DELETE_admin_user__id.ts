import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { DELETE_admin_user__id_Req } from '../expressjs-aa/api/DELETE_admin_user__id';
import { User } from '../model/table/User'

export function implement_DELETE_admin_user__id(engine: ExpressAA) {
  engine.implement({
    endpoint: 'DELETE /admin/user/:id',
    async fn(param: DELETE_admin_user__id_Req): Promise<User> {
      // 

      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }

      const { id } = param.paths;

      try {

        const userToDelete = await User.findOneBy({ 
          id: Number(id) 
        });

        // 3. Jika pengguna tidak ditemukan, lemparkan error
        if (!userToDelete) {
          throw new Error(`Pengguna dengan ID ${id} tidak ditemukan.`);
        }

        // 4. Hapus pengguna dari database
        await User.remove(userToDelete);

        // 5. Kembalikan data pengguna yang baru saja dihapus
        return userToDelete;

      } catch (error: any) {
        throw new Error(error.message || "Gagal menghapus pengguna.");
      }
    }
  });
}
