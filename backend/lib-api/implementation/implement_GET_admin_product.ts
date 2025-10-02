import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { GET_admin_product_Req } from '../expressjs-aa/api/GET_admin_product';
import { Product } from "../model/table/Product";
import { AdminProductResult } from '../ts-schema/AdminProductResult'

export function implement_GET_admin_product(engine: ExpressAA) {
  engine.implement({
    endpoint: 'GET /admin/product',
    async fn(param: GET_admin_product_Req): Promise<AdminProductResult> {
      // mengambil data product keseluruhan

      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }
      
      try {
        // Logika paginasi (page, limit, skip) dihapus
  

        // 2. Gunakan findAndCount tanpa opsi 'take' dan 'skip'
        const [products, totalCount] = await Product.findAndCount({
          order: {
            id: 'DESC' // Urutkan berdasarkan ID terbaru
          }
        });
        
        // 3. Kembalikan semua data produk
        return {
          total: totalCount,
          data: products
    
        };
        
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
        throw new Error("Terjadi kesalahan pada server saat mengambil data produk.");
      }

      return {} as any;
    }
  });
}
