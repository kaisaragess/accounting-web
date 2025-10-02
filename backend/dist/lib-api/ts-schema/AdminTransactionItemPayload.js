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
exports.AdminTransactionItemPayload = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AdminTransactionItemPayload {
}
exports.AdminTransactionItemPayload = AdminTransactionItemPayload;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id_transaction cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'id_transaction must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionItemPayload.prototype, "id_transaction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id_product cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'id_product must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionItemPayload.prototype, "id_product", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'price_per_item cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'price_per_item must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionItemPayload.prototype, "price_per_item", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'quantity cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'quantity must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionItemPayload.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'subtotal cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'subtotal must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionItemPayload.prototype, "subtotal", void 0);
