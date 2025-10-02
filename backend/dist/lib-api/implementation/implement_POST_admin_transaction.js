"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.implement_POST_admin_transaction = implement_POST_admin_transaction;
const verifyToken_1 = require("../../fn/verifyToken");
const data_source_1 = require("../../data-source");
const TransactionItem_1 = require("../model/table/TransactionItem");
const Product_1 = require("../model/table/Product");
const Transaction_1 = require("../model/table/Transaction");
function implement_POST_admin_transaction(engine) {
    engine.implement({
        endpoint: 'POST /admin/transaction',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // 
                const { authorization: authorization } = param.headers;
                const token = (0, verifyToken_1.verifyToken)(authorization);
                if (!token) {
                    throw new Error("Unauthorized");
                }
                const { id_user, methode_payment, item } = param.body.data;
                if (!item || item.length === 0) {
                    throw new Error("Transaksi harus memiliki setidaknya satu item.");
                }
                const queryRunner = data_source_1.AppDataSource.createQueryRunner();
                yield queryRunner.connect();
                yield queryRunner.startTransaction();
                try {
                    let calculatedTotalAmount = 0;
                    const itemsToSave = [];
                    for (const an_item of item) {
                        const product = yield queryRunner.manager.findOneBy(Product_1.Product, { id: an_item.id_product });
                        if (!product)
                            throw new Error(`Produk dengan ID ${an_item.id_product} tidak ditemukan.`);
                        if (product.quantity < an_item.quantity)
                            throw new Error(`Stok untuk produk '${product.name}' tidak mencukupi.`);
                        // Kalkulasi total harga di backend
                        const subtotal = product.price * an_item.quantity;
                        calculatedTotalAmount += subtotal;
                        // Kurangi stok produk
                        product.quantity -= an_item.quantity;
                        yield queryRunner.manager.save(product);
                        // Siapkan item transaksi untuk disimpan
                        const transactionItem = new TransactionItem_1.TransactionItem();
                        transactionItem.id_product = an_item.id_product;
                        transactionItem.quantity = an_item.quantity;
                        transactionItem.price_per_item = product.price; // Gunakan harga dari DB
                        transactionItem.subtotal = subtotal;
                        itemsToSave.push(transactionItem);
                    }
                    //Buat dan simpan header transaksi
                    const transaction = new Transaction_1.Transaction();
                    transaction.id_user = id_user;
                    transaction.methode_payment = methode_payment;
                    transaction.total_amount = calculatedTotalAmount; // Gunakan total yang dihitung server
                    transaction.total_product_sold = item.reduce((sum, current) => sum + current.quantity, 0);
                    transaction.status = true; // Atau ambil dari payload jika ada
                    transaction.transaction_date = new Date();
                    const savedTransaction = yield queryRunner.manager.save(transaction);
                    // 4. Hubungkan item dengan header dan simpan
                    for (const itemToSave of itemsToSave) {
                        itemToSave.id_transaction = savedTransaction.id;
                    }
                    const savedItems = yield queryRunner.manager.save(itemsToSave);
                    // Jika semua berhasil, commit
                    yield queryRunner.commitTransaction(); // <-- SIMPAN SEMUA PERUBAHAN
                    // 5. Kembalikan data lengkap sesuai skema
                    return {
                        penjualan: savedTransaction,
                        list_item: savedItems,
                    };
                }
                catch (error) {
                    yield queryRunner.rollbackTransaction();
                    throw new Error(error.message || "Gagal membuat transaksi.");
                }
                finally {
                    yield queryRunner.release();
                }
            });
        }
    });
}
