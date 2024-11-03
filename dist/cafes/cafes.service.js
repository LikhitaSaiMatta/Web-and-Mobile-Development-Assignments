"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CafesService = void 0;
const common_1 = require("@nestjs/common");
let CafesService = class CafesService {
    constructor() {
        this.cafes = [
            {
                id: 1,
                name: 'Cafe Mocha',
                location: 'Toronto',
                rating: 8,
                reviews: [],
            },
        ];
    }
    findAll() {
        return this.cafes;
    }
    findOne(id) {
        return this.cafes.find(cafe => cafe.id === id);
    }
    create(cafe) {
        this.cafes.push(cafe);
    }
};
exports.CafesService = CafesService;
exports.CafesService = CafesService = __decorate([
    (0, common_1.Injectable)()
], CafesService);
//# sourceMappingURL=cafes.service.js.map