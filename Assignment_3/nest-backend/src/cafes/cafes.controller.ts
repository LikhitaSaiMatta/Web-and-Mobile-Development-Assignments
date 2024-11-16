
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CafesService } from './cafes.service';
import { CreateCafeDto } from './dto/create-cafe.dto';
import { AddReviewDto } from './dto/add-review.dto';

@Controller('cafes')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  getAllCafes() {
    return this.cafesService.getAllCafes();
  }

  @Post()
  createCafe(@Body() createCafeDto: CreateCafeDto) {
    return this.cafesService.createCafe(createCafeDto);
  }

  @Post(':id/review')
  addReview(@Param('id') id: string, @Body() addReviewDto: AddReviewDto) {
    return this.cafesService.addReview(id, addReviewDto);
  }
}
