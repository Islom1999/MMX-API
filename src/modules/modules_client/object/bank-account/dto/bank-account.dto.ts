import { IsNotEmpty, IsString } from 'class-validator';

export class BankAccountCreateDto {
  @IsNotEmpty()
  @IsString()
  mfo: string;

  @IsNotEmpty()
  @IsString()
  account_number: string;
}

export class BankAccountUpdateDto {
  @IsNotEmpty()
  @IsString()
  mfo: string;

  @IsNotEmpty()
  @IsString()
  account_number: string;
}
