import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { GET_admin_transaction_Req } from '../expressjs-aa/api/GET_admin_transaction';
import { Transaction } from "../model/table/Transaction";
import { AdminTransactionResult } from '../ts-schema/AdminTransactionResult';

export function implement_GET_admin_transaction(engine: ExpressAA) {
  engine.implement({
    endpoint: 'GET /admin/transaction',
    async fn(param: GET_admin_transaction_Req): Promise<AdminTransactionResult> {
      // 

      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }


      // Implementasi logika untuk mendapatkan daftar transaksi
      try {
        // 2. Ambil parameter paginasi dari query URL
        const page = param.query.page || 1;
        const limit = param.query.limit || 10;
        const skip = (page - 1) * limit;

        // 3. Ambil data transaksi dan jumlah totalnya
        const [transactions, totalCount] = await Transaction.findAndCount({
          take: limit,
          skip: skip,
          order: {
            id: 'DESC' // Urutkan berdasarkan ID terbaru
          }
        });
        
        // 4. Kembalikan data sesuai format yang diharapkan
        return {
          total: totalCount,
          data: transactions
        };
        
      } catch (error) {
        console.error("Gagal mengambil data transaksi:", error);
        throw new Error("Terjadi kesalahan pada server saat mengambil data transaksi.");
      }
    }
  });
}
