import { Module } from '@nestjs/common';
import { DealController } from './deal.controller';
import { DealService } from './deal.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Deal} from "./entities/deal.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Deal])
  ],
  controllers: [DealController],
  providers: [DealService],
  exports: [DealService]
})
export class DealModule {}
