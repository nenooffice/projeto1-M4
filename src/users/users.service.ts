import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  getById(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  create(dto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data: dto });
  }
}
