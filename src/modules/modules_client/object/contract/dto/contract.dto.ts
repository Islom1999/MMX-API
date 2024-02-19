import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Contract_Type } from 'src/common';

export class ContractCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  start_date: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  end_date: Date;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(Contract_Type)
  contract_type: Contract_Type;

  @IsNotEmpty()
  @IsString()
  contragent_id: string;

  @IsNotEmpty()
  @IsString()
  currency_id: string;
}

export class ContractUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    start_date: Date;
  
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    end_date: Date;
  
    @IsNotEmpty()
    @IsString()
    number: string;
  
    @IsNotEmpty()
    @IsNumber()
    amount: number;
  
    @IsNotEmpty()
    @IsEnum(Contract_Type)
    contract_type: Contract_Type;
  
    @IsNotEmpty()
    @IsString()
    contragent_id: string;
  
    @IsNotEmpty()
    @IsString()
    currency_id: string;
}
