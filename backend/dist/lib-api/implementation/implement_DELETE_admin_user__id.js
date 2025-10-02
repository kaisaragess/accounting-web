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
exports.implement_DELETE_admin_user__id = implement_DELETE_admin_user__id;
const verifyToken_1 = require("../../fn/verifyToken");
const User_1 = require("../model/table/User");
function implement_DELETE_admin_user__id(engine) {
    engine.implement({
        endpoint: 'DELETE /admin/user/:id',
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
                    const userToDelete = yield User_1.User.findOneBy({
                        id: Number(id)
                    });
                    // 3. Jika pengguna tidak ditemukan, lemparkan error
                    if (!userToDelete) {
                        throw new Error(`Pengguna dengan ID ${id} tidak ditemukan.`);
                    }
                    // 4. Hapus pengguna dari database
                    yield User_1.User.remove(userToDelete);
                    // 5. Kembalikan data pengguna yang baru saja dihapus
                    return userToDelete;
                }
                catch (error) {
                    throw new Error(error.message || "Gagal menghapus pengguna.");
                }
            });
        }
    });
}
