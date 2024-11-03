import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafesModule } from './cafes/cafes.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [CafesModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
