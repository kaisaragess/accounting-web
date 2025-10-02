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
const data_source_1 = require("./data-source");
const ExpressAA_1 = require("./lib-api/expressjs-aa/ExpressAA");
const implement_DELETE_admin_product__id_1 = require("./lib-api/implementation/implement_DELETE_admin_product__id");
const implement_DELETE_admin_user__id_1 = require("./lib-api/implementation/implement_DELETE_admin_user__id");
const implement_GET_admin_product_1 = require("./lib-api/implementation/implement_GET_admin_product");
const implement_GET_admin_product__id_1 = require("./lib-api/implementation/implement_GET_admin_product__id");
const implement_GET_admin_transaction_1 = require("./lib-api/implementation/implement_GET_admin_transaction");
const implement_GET_admin_transaction__id_1 = require("./lib-api/implementation/implement_GET_admin_transaction__id");
const implement_GET_admin_user_1 = require("./lib-api/implementation/implement_GET_admin_user");
const implement_GET_admin_user__id_1 = require("./lib-api/implementation/implement_GET_admin_user__id");
const implement_POST_admin_product_1 = require("./lib-api/implementation/implement_POST_admin_product");
const implement_POST_admin_transaction_1 = require("./lib-api/implementation/implement_POST_admin_transaction");
const implement_POST_login_1 = require("./lib-api/implementation/implement_POST_login");
const implement_POST_register_1 = require("./lib-api/implementation/implement_POST_register");
const implement_PUT_admin_product__id_1 = require("./lib-api/implementation/implement_PUT_admin_product__id");
const implement_PUT_admin_user__id_1 = require("./lib-api/implementation/implement_PUT_admin_user__id");
// import { User } from "./lib-api/model/table/User";
const system_param = {
    port: 3001,
    beforeStart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield data_source_1.AppDataSource.initialize();
        });
    },
};
new ExpressAA_1.ExpressAA().init(system_param).then((engine) => {
    (0, implement_POST_register_1.implement_POST_register)(engine),
        (0, implement_POST_login_1.implement_POST_login)(engine),
        (0, implement_POST_admin_product_1.implement_POST_admin_product)(engine),
        (0, implement_DELETE_admin_user__id_1.implement_DELETE_admin_user__id)(engine),
        (0, implement_DELETE_admin_product__id_1.implement_DELETE_admin_product__id)(engine),
        (0, implement_PUT_admin_product__id_1.implement_PUT_admin_product__id)(engine),
        (0, implement_PUT_admin_user__id_1.implement_PUT_admin_user__id)(engine),
        (0, implement_GET_admin_product__id_1.implement_GET_admin_product__id)(engine),
        (0, implement_GET_admin_product_1.implement_GET_admin_product)(engine),
        (0, implement_GET_admin_user__id_1.implement_GET_admin_user__id)(engine),
        (0, implement_GET_admin_transaction_1.implement_GET_admin_transaction)(engine),
        (0, implement_GET_admin_transaction__id_1.implement_GET_admin_transaction__id)(engine),
        (0, implement_POST_admin_transaction_1.implement_POST_admin_transaction)(engine),
        (0, implement_GET_admin_user_1.implement_GET_admin_user)(engine);
});
