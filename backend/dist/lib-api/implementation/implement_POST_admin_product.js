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
exports.implement_POST_admin_product = implement_POST_admin_product;
const Product_1 = require("../model/table/Product");
const verifyToken_1 = require("../../fn/verifyToken");
function implement_POST_admin_product(engine) {
    engine.implement({
        endpoint: 'POST /admin/product',
        fn(param) {
            return __awaiter(this, void 0, void 0, function* () {
                // menampilkan data product keseluruhan
                const { authorization: authorization } = param.headers;
                const token = (0, verifyToken_1.verifyToken)(authorization);
                if (!token) {
                    throw new Error("Unauthorized");
                }
                const { category, description, name, imgurl, price, quantity } = param.body.data;
                if (!category || !description || !name || !imgurl || !price || !quantity) {
                    throw new Error("category, description, name, imgurl, price, quantity are required");
                }
                if (typeof price !== 'number' || price <= 0) {
                    throw new Error("price must be a positive number");
                }
                if (typeof quantity !== 'number' || quantity < 0) {
                    throw new Error("quantity must be a non-negative number");
                }
                if (name.length < 3) {
                    throw new Error("name must be at least 3 characters long");
                }
                if (description.length < 10) {
                    throw new Error("description must be at least 10 characters long");
                }
                if (category.length < 3) {
                    throw new Error("category must be at least 3 characters long");
                }
                if (imgurl.length < 10) {
                    throw new Error("imgurl must be at least 10 characters long");
                }
                // create new product
                const newProduct = new Product_1.Product();
                newProduct.category = category;
                newProduct.description = description;
                newProduct.name = name;
                newProduct.imgurl = imgurl;
                newProduct.price = price;
                newProduct.quantity = quantity;
                yield newProduct.save();
                return newProduct;
            });
        }
    });
}
