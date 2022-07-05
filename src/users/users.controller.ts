import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista de todos os usuários',
  })
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna usuário único.',
  })
  getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria um novo usuário',
  })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um usuário',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar o usuário.',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }
}
