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
exports.AdminTransactionPayload = void 0;
const TransactionItem_1 = require("../ts-model/table/TransactionItem");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AdminTransactionPayload {
}
exports.AdminTransactionPayload = AdminTransactionPayload;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id_user cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'id_user must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionPayload.prototype, "id_user", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'total_amount cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'total_amount must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionPayload.prototype, "total_amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'total_product_sold cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'total_product_sold must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminTransactionPayload.prototype, "total_product_sold", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'methode_payment cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'methode_payment must be a string' }),
    __metadata("design:type", String)
], AdminTransactionPayload.prototype, "methode_payment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'transaction_date cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'transaction_date must be a string' }),
    __metadata("design:type", String)
], AdminTransactionPayload.prototype, "transaction_date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'status cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : ((param === null || param === void 0 ? void 0 : param.value) === 'true' || ((typeof (param === null || param === void 0 ? void 0 : param.value) === 'boolean') && (param === null || param === void 0 ? void 0 : param.value)))),
    (0, class_validator_1.IsBoolean)({ message: 'status must be a boolean' }),
    __metadata("design:type", Boolean)
], AdminTransactionPayload.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'item cannot be empty' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TransactionItem_1.TransactionItem),
    __metadata("design:type", Array)
], AdminTransactionPayload.prototype, "item", void 0);
