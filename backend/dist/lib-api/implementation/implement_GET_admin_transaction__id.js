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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.implement_GET_admin_transaction__id = implement_GET_admin_transaction__id;
const verifyToken_1 = require("../../fn/verifyToken");
const Transaction_1 = require("../model/table/Transaction");
function implement_GET_admin_transaction__id(engine) {
    engine.implement({
        endpoint: 'GET /admin/transaction/:id',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // 
                const { authorization: authHeader } = param.headers;
                const tokenPayload = yield (0, verifyToken_1.verifyToken)(authHeader);
                if (!tokenPayload) {
                    throw new Error("Token tidak valid atau otorisasi gagal.");
                }
                const { id } = param.paths;
                try {
                    //Cari transaksi berdasarkan ID dan sertakan relasi 'items'
                    const transaction = yield Transaction_1.Transaction.findOne({
                        where: { id: Number(id) },
                        relations: ['items'] // 'items' adalah nama relasi di entity Transaction Anda
                    });
                    // 3. Jika transaksi tidak ditemukan, lemparkan error
                    if (!transaction) {
                        throw new Error(`Transaksi dengan ID ${id} tidak ditemukan.`);
                    }
                    // 4. Pisahkan header dan items untuk respons yang bersih
                    const { items } = transaction, header = __rest(transaction, ["items"]);
                    // // 5. Kembalikan data dalam format terstruktur
                    return {
                        transaction_header: header,
                        transaction_items: items
                    };
                }
                catch (error) {
                    throw new Error(error.message || "Gagal mengambil detail transaksi.");
                }
            });
        }
    });
}
