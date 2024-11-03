import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

interface Review {
  userId: number;
  rating: number;
  comment: string;
}

@Controller('cafes/:cafeId/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  getReviews(@Param('cafeId') cafeId: string): Review[] {
    return this.reviewsService.getReviews(Number(cafeId));
  }

  @Post()
  addReview(
    @Param('cafeId') cafeId: string,
    @Body() review: { userId: number; rating: number; comment: string },
  ): { message: string } {
    this.reviewsService.addReview(Number(cafeId), review);
    return { message: 'Review added successfully' };
  }
}
