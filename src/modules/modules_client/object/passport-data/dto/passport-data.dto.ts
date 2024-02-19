import { IsNotEmpty, IsString } from 'class-validator';

export class PassportDataCreateDto {
  @IsNotEmpty()
  @IsString()
  inn: string;

  @IsNotEmpty()
  @IsString()
  passport_seriya: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}

export class PassportDataUpdateDto {
  @IsNotEmpty()
  @IsString()
  inn: string;

  @IsNotEmpty()
  @IsString()
  passport_seriya: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
