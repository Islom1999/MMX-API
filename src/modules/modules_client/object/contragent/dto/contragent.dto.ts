import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Contragent_Status, Contragent_Type } from 'src/common';

export class ContragentCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(Contragent_Type)
  contragent_type: Contragent_Type;

  @IsNotEmpty()
  @IsEnum(Contragent_Status)
  contragent_status: Contragent_Status;

  @IsNotEmpty()
  @IsString()
  passport_data_id: string;

  @IsNotEmpty()
  @IsString()
  bank_account_id: string;
}

export class ContragentUpdateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(Contragent_Type)
  contragent_type: Contragent_Type;

  @IsNotEmpty()
  @IsEnum(Contragent_Status)
  contragent_status: Contragent_Status;

  @IsNotEmpty()
  @IsString()
  passport_data_id: string;

  @IsNotEmpty()
  @IsString()
  bank_account_id: string;
}
