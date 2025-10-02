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
exports.implement_GET_admin_product = implement_GET_admin_product;
const verifyToken_1 = require("../../fn/verifyToken");
const Product_1 = require("../model/table/Product");
function implement_GET_admin_product(engine) {
    engine.implement({
        endpoint: 'GET /admin/product',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // mengambil data product keseluruhan
                const { authorization: authHeader } = param.headers;
                const tokenPayload = yield (0, verifyToken_1.verifyToken)(authHeader);
                if (!tokenPayload) {
                    throw new Error("Token tidak valid atau otorisasi gagal.");
                }
                try {
                    // Logika paginasi (page, limit, skip) dihapus
                    // 2. Gunakan findAndCount tanpa opsi 'take' dan 'skip'
                    const [products, totalCount] = yield Product_1.Product.findAndCount({
                        order: {
                            id: 'DESC' // Urutkan berdasarkan ID terbaru
                        }
                    });
                    // 3. Kembalikan semua data produk
                    return {
                        total: totalCount,
                        data: products
                    };
                }
                catch (error) {
                    console.error("Gagal mengambil data produk:", error);
                    throw new Error("Terjadi kesalahan pada server saat mengambil data produk.");
                }
                return {};
            });
        }
    });
}
