import { ExpressAA } from "../expressjs-aa/ExpressAA";
import { POST_admin_transaction_Req } from '../expressjs-aa/api/POST_admin_transaction';
import { AdminTransactionPayload } from '../ts-schema/AdminTransactionPayload'
import { AdminDetailTransaction } from '../ts-schema/AdminDetailTransaction'
import { verifyToken } from "../../fn/verifyToken";
import { AppDataSource } from "../../data-source";
import { TransactionItem } from "../model/table/TransactionItem";
import { Product } from "../model/table/Product";
import { Transaction } from "../model/table/Transaction";
import { MetodePembayaran } from "../model/enum/MetodePembayaran";

export function implement_POST_admin_transaction(engine: ExpressAA) {
  engine.implement({
    endpoint: 'POST /admin/transaction',
    async fn(param: POST_admin_transaction_Req): Promise<AdminDetailTransaction> {
      // 

      const { authorization: authorization } = param.headers;
      const token = verifyToken(authorization);
      if (!token) {
        throw new Error("Unauthorized");
      }
      const { id_user, methode_payment, item } = param.body.data;

      if (!item || item.length === 0) {
        throw new Error("Transaksi harus memiliki setidaknya satu item.");
      }

      const queryRunner = AppDataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        let calculatedTotalAmount = 0;
        const itemsToSave: TransactionItem[] = [];

        for (const an_item of item) {
          const product = await queryRunner.manager.findOneBy(Product, { id: an_item.id_product });
          if (!product) throw new Error(`Produk dengan ID ${an_item.id_product} tidak ditemukan.`);
          if (product.quantity < an_item.quantity) throw new Error(`Stok untuk produk '${product.name}' tidak mencukupi.`);

          // Kalkulasi total harga di backend
          const subtotal = product.price * an_item.quantity;
          calculatedTotalAmount += subtotal;

          // Kurangi stok produk
          product.quantity -= an_item.quantity;
          await queryRunner.manager.save(product);

          // Siapkan item transaksi untuk disimpan
          const transactionItem = new TransactionItem();
          transactionItem.id_product = an_item.id_product;
          transactionItem.quantity = an_item.quantity;
          transactionItem.price_per_item = product.price; // Gunakan harga dari DB
          transactionItem.subtotal = subtotal;
          itemsToSave.push(transactionItem);
        }

        //Buat dan simpan header transaksi
        const transaction = new Transaction();
        transaction.id_user = id_user;
        transaction.methode_payment = methode_payment as MetodePembayaran;
        transaction.total_amount = calculatedTotalAmount; // Gunakan total yang dihitung server
        transaction.total_product_sold = item.reduce((sum, current) => sum + current.quantity, 0);
        transaction.status = true; // Atau ambil dari payload jika ada
        transaction.transaction_date = new Date();
        const savedTransaction = await queryRunner.manager.save(transaction);

        // 4. Hubungkan item dengan header dan simpan
        for (const itemToSave of itemsToSave) {
          itemToSave.id_transaction = savedTransaction.id;
        }
        const savedItems = await queryRunner.manager.save(itemsToSave);

        // Jika semua berhasil, commit
        await queryRunner.commitTransaction(); // <-- SIMPAN SEMUA PERUBAHAN

        // 5. Kembalikan data lengkap sesuai skema
        return {
          penjualan: savedTransaction,
          list_item: savedItems,
        };


      } catch (error: any) {  
        await queryRunner.rollbackTransaction();
        throw new Error(error.message || "Gagal membuat transaksi.");
      } finally {
        await queryRunner.release();
      }
    }
  });
}
