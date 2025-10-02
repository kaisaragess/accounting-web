import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { DELETE_admin_product__id_Req } from '../expressjs-aa/api/DELETE_admin_product__id';
import { Product } from '../model/table/Product'

export function implement_DELETE_admin_product__id(engine: ExpressAA) {
  engine.implement({
    endpoint: 'DELETE /admin/product/:id',
    async fn(param: DELETE_admin_product__id_Req): Promise<Product> {
      // 
      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }

      const { id } = param.paths;
      
      try {

        // 2. Cari produk yang akan dihapus
        const productToDelete = await Product.findOneBy({ 
          id: Number(id) 
        });

        // 3. Jika produk tidak ditemukan, lemparkan error
        if (!productToDelete) {
          throw new Error(`Produk dengan ID ${id} tidak ditemukan.`);
        }

        // 4. Hapus produk dari database
        await Product.remove(productToDelete);

        // 5. Kembalikan data produk yang baru saja dihapus
        return productToDelete;

      } catch (error: any) {
        throw new Error(error.message || "Gagal menghapus produk.");
      }
    }
  });
}
