import { verifyToken } from "../../fn/verifyToken";
import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { GET_admin_transaction__id_Req } from '../expressjs-aa/api/GET_admin_transaction__id';
import { Transaction } from "../model/table/Transaction";
import { DetailTransactionResponse } from '../ts-schema/DetailTransactionResponse'

export function implement_GET_admin_transaction__id(engine: ExpressAA) {
  engine.implement({
    endpoint: 'GET /admin/transaction/:id',
    async fn(param: GET_admin_transaction__id_Req): Promise<DetailTransactionResponse> {
      // 

      const { authorization: authHeader } = param.headers;
      const tokenPayload = await verifyToken(authHeader);
      if (!tokenPayload) {
        throw new Error("Token tidak valid atau otorisasi gagal.");
      }

      const { id } = param.paths;

       try {

        //Cari transaksi berdasarkan ID dan sertakan relasi 'items'
        const transaction = await Transaction.findOne({
          where: { id: Number(id) },
          relations: ['items'] // 'items' adalah nama relasi di entity Transaction Anda
        });

        // 3. Jika transaksi tidak ditemukan, lemparkan error
        if (!transaction) {
          throw new Error(`Transaksi dengan ID ${id} tidak ditemukan.`);
        }
        
        // 4. Pisahkan header dan items untuk respons yang bersih
        const { items, ...header } = transaction;

        // // 5. Kembalikan data dalam format terstruktur
        return {
          transaction_header: header,
          transaction_items: items
        };

      } catch (error: any) {
        throw new Error(error.message || "Gagal mengambil detail transaksi.");
      }

    }
  });
}
