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
exports.AdminProductPayload = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AdminProductPayload {
}
exports.AdminProductPayload = AdminProductPayload;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'category cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'category must be a string' }),
    __metadata("design:type", String)
], AdminProductPayload.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'name cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    __metadata("design:type", String)
], AdminProductPayload.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'price cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'price must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminProductPayload.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'imgurl cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'imgurl must be a string' }),
    __metadata("design:type", String)
], AdminProductPayload.prototype, "imgurl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'description cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'description must be a string' }),
    __metadata("design:type", String)
], AdminProductPayload.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'quantity cannot be empty' }),
    (0, class_transformer_1.Transform)((param) => ((param === null || param === void 0 ? void 0 : param.value) === null || (param === null || param === void 0 ? void 0 : param.value) === undefined || (param === null || param === void 0 ? void 0 : param.value) === '') ? null : parseFloat(param.value)),
    (0, class_validator_1.IsNumber)({}, { message: 'quantity must be a number (decimal)' }),
    __metadata("design:type", Number)
], AdminProductPayload.prototype, "quantity", void 0);
