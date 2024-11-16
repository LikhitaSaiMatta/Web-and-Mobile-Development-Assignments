
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class Review {
  @Prop({ required: true })
  reviewer: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  rating: number;
}

const ReviewSchema = SchemaFactory.createForClass(Review);

@Schema()
export class Cafe extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  image: string;

  @Prop({ type: [ReviewSchema] })
  reviews: Review[];
}

export const CafeSchema = SchemaFactory.createForClass(Cafe);
