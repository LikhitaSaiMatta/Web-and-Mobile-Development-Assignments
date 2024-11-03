import { Injectable } from '@nestjs/common';

interface Review {
  userId: number;
  rating: number;
  comment: string;
}

@Injectable()
export class ReviewsService {
  private reviews: { [key: number]: Review[] } = {};

  addReview(cafeId: number, review: Review): void {
    if (!this.reviews[cafeId]) {
      this.reviews[cafeId] = [];
    }
    this.reviews[cafeId].push(review);
  }

  getReviews(cafeId: number): Review[] {
    return this.reviews[cafeId] || [];
  }
}
