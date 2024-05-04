import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Deal} from "./entities/deal.entity";
import {Repository} from "typeorm";

@Injectable()
export class DealService {
  constructor(
      @InjectRepository(Deal)
      private readonly dealRepository: Repository<Deal>,
  ) {}

  async findAll(): Promise<Deal[]> {
    return await this.dealRepository.find();
  }

}
