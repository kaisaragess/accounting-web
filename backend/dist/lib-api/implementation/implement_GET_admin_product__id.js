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
exports.implement_GET_admin_product__id = implement_GET_admin_product__id;
const verifyToken_1 = require("../../fn/verifyToken");
const Product_1 = require("../model/table/Product");
function implement_GET_admin_product__id(engine) {
    engine.implement({
        endpoint: 'GET /admin/product/:id',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // mengambil satu data detail product
                const { authorization: authHeader } = param.headers;
                const tokenPayload = yield (0, verifyToken_1.verifyToken)(authHeader);
                if (!tokenPayload) {
                    throw new Error("Token tidak valid atau otorisasi gagal.");
                }
                const { id } = param.paths;
                try {
                    // 2. Cari satu produk berdasarkan ID
                    const product = yield Product_1.Product.findOneBy({
                        id: Number(id)
                    });
                    // 3. Jika produk tidak ditemukan, lemparkan error
                    if (!product) {
                        throw new Error(`Produk dengan ID ${id} tidak ditemukan.`);
                    }
                    // 4. Kembalikan produk yang ditemukan
                    return product;
                }
                catch (error) {
                    throw new Error(error.message || "Gagal mengambil detail produk.");
                }
            });
        }
    });
}
