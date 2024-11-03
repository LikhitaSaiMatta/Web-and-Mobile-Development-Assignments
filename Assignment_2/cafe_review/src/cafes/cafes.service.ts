import { Injectable } from '@nestjs/common';

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

@Injectable()
export class CafesService {
  private cafes: Cafe[] = [
    {
      id: 1,
      name: 'Cafe Mocha',
      location: 'Toronto',
      rating: 8,
      reviews: [],
    },
  ];

  findAll(): Cafe[] {
    return this.cafes;
  }

  findOne(id: number): Cafe | undefined {
    return this.cafes.find(cafe => cafe.id === id);
  }

  create(cafe: Cafe): void {
    this.cafes.push(cafe);
  }
}
