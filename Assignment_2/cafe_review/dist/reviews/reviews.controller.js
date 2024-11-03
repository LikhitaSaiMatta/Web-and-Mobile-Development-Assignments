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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const reviews_service_1 = require("./reviews.service");
let ReviewsController = class ReviewsController {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    getReviews(cafeId) {
        return this.reviewsService.getReviews(Number(cafeId));
    }
    addReview(cafeId, review) {
        this.reviewsService.addReview(Number(cafeId), review);
        return { message: 'Review added successfully' };
    }
};
exports.ReviewsController = ReviewsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('cafeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], ReviewsController.prototype, "getReviews", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('cafeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], ReviewsController.prototype, "addReview", null);
exports.ReviewsController = ReviewsController = __decorate([
    (0, common_1.Controller)('cafes/:cafeId/reviews'),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsController);
//# sourceMappingURL=reviews.controller.js.map