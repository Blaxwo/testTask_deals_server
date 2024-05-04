import { Controller, Get } from '@nestjs/common';
import { DealService } from './deal.service';

@Controller('deals')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Get()
  async getAllDeals() {
    return this.dealService.findAll();
  }
}
