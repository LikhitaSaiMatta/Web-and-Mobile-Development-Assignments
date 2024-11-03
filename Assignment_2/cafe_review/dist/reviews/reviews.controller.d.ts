import { ReviewsService } from './reviews.service';
interface Review {
    userId: number;
    rating: number;
    comment: string;
}
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    getReviews(cafeId: string): Review[];
    addReview(cafeId: string, review: {
        userId: number;
        rating: number;
        comment: string;
    }): {
        message: string;
    };
}
export {};
