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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.implement_POST_login = implement_POST_login;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../model/table/User");
const Token_1 = require("../model/table/Token");
const bcrypt_1 = __importDefault(require("bcrypt"));
require("dotenv/config");
function implement_POST_login(engine) {
    engine.implement({
        endpoint: 'POST /login',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // login dengan username, password
                const { username, password } = param.body;
                if (!username || !password) {
                    throw new Error("username and password are required");
                }
                const user = yield User_1.User.findOneBy({ username });
                if (!user) {
                    throw new Error("invalid username or password");
                }
                const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
                if (!isPasswordValid) {
                    throw new Error("invalid username or password");
                }
                const jwtsecret = process.env.JWT_SECRET;
                if (!jwtsecret) {
                    throw new Error("JWT_SECRET not set");
                }
                const expiresInSeconds = 3600; // 1 jam
                const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, jwtsecret, { expiresIn: expiresInSeconds });
                //save token to user
                const newToken = new Token_1.Token();
                newToken.token = token;
                newToken.id_user = user.id;
                // Hitung tanggal kedaluwarsa
                const expirationDate = new Date();
                expirationDate.setSeconds(expirationDate.getSeconds() + expiresInSeconds);
                newToken.expired_at = expirationDate;
                // 3. Simpan token baru ke tabel 'tokens'
                yield Token_1.Token.save(newToken);
                return {
                    token,
                    user
                };
            });
        }
    });
}
