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
exports.implement_PUT_admin_product__id = implement_PUT_admin_product__id;
const Product_1 = require("../model/table/Product");
const verifyToken_1 = require("../../fn/verifyToken");
function implement_PUT_admin_product__id(engine) {
    engine.implement({
        endpoint: 'PUT /admin/product/:id',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // 
                const { authorization: authHeader } = param.headers;
                const tokenPayload = yield (0, verifyToken_1.verifyToken)(authHeader);
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
                    const productToUpdate = yield Product_1.Product.findOneBy({
                        id: Number(id)
                    });
                    if (!productToUpdate) {
                        throw new Error(`Produk dengan ID ${id} tidak ditemukan.`);
                    }
                    // 4. Gabungkan data yang ada dengan data baru
                    Product_1.Product.merge(productToUpdate, payload);
                    // 5. Simpan perubahan ke database
                    const updatedProduct = yield Product_1.Product.save(productToUpdate);
                    return updatedProduct;
                }
                catch (error) {
                    throw new Error(error.message || "Gagal memperbarui produk.");
                }
            });
        }
    });
}
