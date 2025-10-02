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
exports.TransactionItem = void 0;
const typeorm_1 = require("typeorm");
const Transaction_1 = require("../../model/table/Transaction");
const Product_1 = require("../../model/table/Product");
let TransactionItem = class TransactionItem extends typeorm_1.BaseEntity {
};
exports.TransactionItem = TransactionItem;
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TransactionItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Transaction_1.Transaction, x => x.id, {
        nullable: false,
        onDelete: 'CASCADE' // Jika transaksi dihapus, item terkait juga dihapus
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_transaction' }),
    __metadata("design:type", Transaction_1.Transaction)
], TransactionItem.prototype, "otm_id_transaction", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'id_transaction',
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], TransactionItem.prototype, "id_transaction", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, x => x.id, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_product' }),
    __metadata("design:type", Product_1.Product)
], TransactionItem.prototype, "otm_id_product", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'id_product',
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], TransactionItem.prototype, "id_product", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], TransactionItem.prototype, "price_per_item", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], TransactionItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], TransactionItem.prototype, "subtotal", void 0);
exports.TransactionItem = TransactionItem = __decorate([
    (0, typeorm_1.Entity)('TransactionItem')
], TransactionItem);
