import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthClientDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}