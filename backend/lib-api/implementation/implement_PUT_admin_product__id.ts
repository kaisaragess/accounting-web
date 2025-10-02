import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { PUT_admin_product__id_Req } from '../expressjs-aa/api/PUT_admin_product__id';
import { AdminProductPayload } from '../ts-schema/AdminProductPayload'
import { Product } from '../model/table/Product'
import { verifyToken } from "../../fn/verifyToken";

export function implement_PUT_admin_product__id(engine: ExpressAA) {
  engine.implement({
    endpoint: 'PUT /admin/product/:id',
    async fn(param: PUT_admin_product__id_Req): Promise<Product> {
      // 
        const { authorization: authHeader } = param.headers;
        const tokenPayload = await verifyToken(authHeader);
        if (!tokenPayload) {
          throw new Error("Token tidak valid atau otorisasi gagal.");
        }

      try {
        const { id } = param.paths;
        const payload = param.body.data;

        // 2. Validasi: Pastikan payload tidak kosong
        if (!payload) {
          throw new Error("Request body 'data' tidak boleh kosong untuk melakukan update.");
        }

    

        // 3. Cari produk yang akan di-update
        const productToUpdate = await Product.findOneBy({
          id: Number(id)
        });

        if (!productToUpdate) {
          throw new Error(`Produk dengan ID ${id} tidak ditemukan.`);
        }

        // 4. Gabungkan data yang ada dengan data baru
        Product.merge(productToUpdate, payload);

        // 5. Simpan perubahan ke database
        const updatedProduct = await Product.save(productToUpdate);
        
        return updatedProduct;

      } catch (error: any) {
        throw new Error(error.message || "Gagal memperbarui produk.");
      }
    }
  });
}
