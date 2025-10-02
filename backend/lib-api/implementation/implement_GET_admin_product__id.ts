import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { GET_admin_product__id_Req } from '../expressjs-aa/api/GET_admin_product__id';
import { Product } from '../model/table/Product'

export function implement_GET_admin_product__id(engine: ExpressAA) {
  engine.implement({
    endpoint: 'GET /admin/product/:id',
    async fn(param: GET_admin_product__id_Req): Promise<Product> {
      // mengambil satu data detail product

      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }

      const { id } = param.paths;

      try {
        
        // 2. Cari satu produk berdasarkan ID
        const product = await Product.findOneBy({ 
          id: Number(id) 
        });
        
        // 3. Jika produk tidak ditemukan, lemparkan error
        if (!product) {
          throw new Error(`Produk dengan ID ${id} tidak ditemukan.`);
        }
        
        // 4. Kembalikan produk yang ditemukan
        return product;
        
      } catch (error: any) {
        throw new Error(error.message || "Gagal mengambil detail produk.");
      }
    }
  });
}
