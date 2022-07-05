import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Eugenio',
    description: 'Nome do usuário',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'aaaaa@aaa.com',
    description: 'Email do usuário',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Too weak',
  })
  @ApiProperty({
    example: '@Admin1234',
    description: 'Senha do usuário',
  })
  password: string;
}
