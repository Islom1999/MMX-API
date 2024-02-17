import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Barcode_Type } from 'src/common';

export class BarcodeCreateDto {
  @IsNotEmpty()
  @IsString()
  barcode: string;

  @IsNotEmpty()
  @IsEnum(Barcode_Type)
  barcode_type: Barcode_Type;

  @IsNotEmpty()
  @IsString()
  product_id: string;

  @IsNotEmpty()
  @IsString()
  product_unit_id: string;
}

export class BarcodeUpdateDto {
  @IsNotEmpty()
  @IsString()
  barcode: string;

  @IsNotEmpty()
  @IsEnum(Barcode_Type)
  barcode_type: Barcode_Type;

  @IsNotEmpty()
  @IsString()
  product_id: string;

  @IsNotEmpty()
  @IsString()
  product_unit_id: string;
}
