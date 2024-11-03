import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CafesService } from './cafes.service';

interface Cafe {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: Review[];
}

interface Review {
  userId: number;
  rating: number;
  comment: string;
}

@Controller('cafes')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  findAll(): Cafe[] {
    return this.cafesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Cafe | undefined {
    return this.cafesService.findOne(Number(id));
  }

  @Post()
  create(@Body() cafe: { id: number; name: string; location: string; rating: number }) {
    // Add the empty `reviews` array to match the `Cafe` interface
    const newCafe: Cafe = { ...cafe, reviews: [] };
    this.cafesService.create(newCafe);
    return { message: 'Cafe added successfully' };
  }
}
