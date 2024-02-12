import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password:string

  @IsNotEmpty()
  @IsBoolean()
  is_block: boolean;

  @IsNotEmpty()
  @IsString()
  role_id: string;

  @IsNotEmpty()
  @IsString()
  organisation_id: string
}
