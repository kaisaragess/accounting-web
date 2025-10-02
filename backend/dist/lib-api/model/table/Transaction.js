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
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../model/table/User");
const MetodePembayaran_1 = require("../../model/enum/MetodePembayaran");
const TransactionItem_1 = require("./TransactionItem");
let Transaction = class Transaction extends typeorm_1.BaseEntity {
};
exports.Transaction = Transaction;
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, x => x.id, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_user' }),
    __metadata("design:type", User_1.User)
], Transaction.prototype, "otm_id_user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'id_user',
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "total_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false,
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "total_product_sold", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MetodePembayaran_1.MetodePembayaran,
        nullable: true,
        default: 'Tunai',
    }),
    __metadata("design:type", String)
], Transaction.prototype, "methode_payment", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: false,
    }),
    __metadata("design:type", Date)
], Transaction.prototype, "transaction_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        nullable: true,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TransactionItem_1.TransactionItem, (item) => item.id_transaction),
    __metadata("design:type", Array)
], Transaction.prototype, "items", void 0);
exports.Transaction = Transaction = __decorate([
    (0, typeorm_1.Entity)('Transaction')
], Transaction);
