import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'name',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'email',
  })
  email: string;
}
