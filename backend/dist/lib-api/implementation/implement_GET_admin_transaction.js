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
exports.implement_GET_admin_transaction = implement_GET_admin_transaction;
const verifyToken_1 = require("../../fn/verifyToken");
const Transaction_1 = require("../model/table/Transaction");
function implement_GET_admin_transaction(engine) {
    engine.implement({
        endpoint: 'GET /admin/transaction',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // 
                const { authorization: authHeader } = param.headers;
                const tokenPayload = yield (0, verifyToken_1.verifyToken)(authHeader);
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
                    const [transactions, totalCount] = yield Transaction_1.Transaction.findAndCount({
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
                }
                catch (error) {
                    console.error("Gagal mengambil data transaksi:", error);
                    throw new Error("Terjadi kesalahan pada server saat mengambil data transaksi.");
                }
            });
        }
    });
}
