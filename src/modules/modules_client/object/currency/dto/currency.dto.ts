import { IsNotEmpty, IsString } from 'class-validator';

export class CurrencyCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class CurrencyUpdateDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
