import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import * as argon2 from 'argon2'
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User) private userRepository: Repository<User>,
      private jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      }
    })
    if(existUser) throw new BadRequestException('Email already exist')

    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
    })
    const token = this.jwtService.sign({email: createUserDto.email})
    return {user, token};
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: {
        email,
      }
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

}
