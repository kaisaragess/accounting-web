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
exports.implement_GET_admin_user = implement_GET_admin_user;
const verifyToken_1 = require("../../fn/verifyToken");
const User_1 = require("../model/table/User");
function implement_GET_admin_user(engine) {
    engine.implement({
        endpoint: 'GET /admin/user',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // 
                const { authorization: authHeader } = param.headers;
                const tokenPayload = yield (0, verifyToken_1.verifyToken)(authHeader);
                if (!tokenPayload) {
                    throw new Error("Token tidak valid atau otorisasi gagal.");
                }
                try {
                    const [users, totalCount] = yield User_1.User.findAndCount({
                        // Pilih hanya kolom yang aman untuk dikembalikan (password diabaikan)
                        select: ["id", "fullname", "username", "role", "created_at"],
                        order: {
                            id: 'DESC'
                        }
                    });
                    return {
                        total: totalCount,
                        data: users,
                    };
                }
                catch (error) {
                    throw new Error(error.message || "Gagal mengambil data pengguna.");
                }
            });
        }
    });
}
