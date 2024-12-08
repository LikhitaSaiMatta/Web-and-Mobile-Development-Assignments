
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cafe } from '../schemas/cafe.schema';
import { CreateCafeDto } from './dto/create-cafe.dto';
import { AddReviewDto } from './dto/add-review.dto';

@Injectable()
export class CafesService {
  constructor(@InjectModel(Cafe.name) private readonly cafeModel: Model<Cafe>) {}

  async getAllCafes() {
    return this.cafeModel.find();
  }

  async createCafe(createCafeDto: CreateCafeDto) {
    const cafe = new this.cafeModel(createCafeDto);
    return cafe.save();
  }

  async addReview(cafeId: string, addReviewDto: AddReviewDto) {
    const cafe = await this.cafeModel.findById(cafeId);
    cafe.reviews.push(addReviewDto);
    return cafe.save();
  }
}
