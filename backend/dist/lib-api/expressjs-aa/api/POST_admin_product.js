"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST_admin_product_Req = void 0;
const AdminProductPayload_1 = require("../../ts-schema/AdminProductPayload");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class POST_admin_product_Req_Headers {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'authorization cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'authorization must be a string' }),
    __metadata("design:type", String)
], POST_admin_product_Req_Headers.prototype, "authorization", void 0);
class POST_admin_product_Req_Body {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'data cannot be empty' }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AdminProductPayload_1.AdminProductPayload),
    __metadata("design:type", AdminProductPayload_1.AdminProductPayload)
], POST_admin_product_Req_Body.prototype, "data", void 0);
class POST_admin_product_Req {
}
exports.POST_admin_product_Req = POST_admin_product_Req;
__decorate([
    (0, class_transformer_1.Type)(() => POST_admin_product_Req_Headers),
    __metadata("design:type", POST_admin_product_Req_Headers)
], POST_admin_product_Req.prototype, "headers", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => POST_admin_product_Req_Body),
    __metadata("design:type", POST_admin_product_Req_Body)
], POST_admin_product_Req.prototype, "body", void 0);
