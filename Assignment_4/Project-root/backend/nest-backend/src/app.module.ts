
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CafesModule } from './cafes/cafes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cafe-review'),
    AuthModule,
    CafesModule,
  ],
})
export class AppModule {}
