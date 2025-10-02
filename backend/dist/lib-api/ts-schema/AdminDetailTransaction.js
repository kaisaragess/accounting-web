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
exports.AdminDetailTransaction = void 0;
const Transaction_1 = require("../ts-model/table/Transaction");
const TransactionItem_1 = require("../ts-model/table/TransactionItem");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AdminDetailTransaction {
}
exports.AdminDetailTransaction = AdminDetailTransaction;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'penjualan cannot be empty' }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Transaction_1.Transaction),
    __metadata("design:type", Transaction_1.Transaction)
], AdminDetailTransaction.prototype, "penjualan", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'list_item cannot be empty' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TransactionItem_1.TransactionItem),
    __metadata("design:type", Array)
], AdminDetailTransaction.prototype, "list_item", void 0);
