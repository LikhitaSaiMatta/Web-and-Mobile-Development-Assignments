interface Review {
    userId: number;
    rating: number;
    comment: string;
}
export declare class ReviewsService {
    private reviews;
    addReview(cafeId: number, review: Review): void;
    getReviews(cafeId: number): Review[];
}
export {};
