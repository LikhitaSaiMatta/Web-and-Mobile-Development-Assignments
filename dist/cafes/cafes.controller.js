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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CafesController = void 0;
const common_1 = require("@nestjs/common");
const cafes_service_1 = require("./cafes.service");
let CafesController = class CafesController {
    constructor(cafesService) {
        this.cafesService = cafesService;
    }
    findAll() {
        return this.cafesService.findAll();
    }
    findOne(id) {
        return this.cafesService.findOne(Number(id));
    }
    create(cafe) {
        const newCafe = { ...cafe, reviews: [] };
        this.cafesService.create(newCafe);
        return { message: 'Cafe added successfully' };
    }
};
exports.CafesController = CafesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CafesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], CafesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CafesController.prototype, "create", null);
exports.CafesController = CafesController = __decorate([
    (0, common_1.Controller)('cafes'),
    __metadata("design:paramtypes", [cafes_service_1.CafesService])
], CafesController);
//# sourceMappingURL=cafes.controller.js.map