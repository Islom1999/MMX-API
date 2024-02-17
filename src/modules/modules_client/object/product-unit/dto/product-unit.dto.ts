import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class ProductUnitCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    coefficient: number;
    
    @IsNotEmpty()
    @IsString()
    unit_id: string;
}

export class ProductUnitUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    coefficient: number;
    
    @IsNotEmpty()
    @IsString()
    unit_id: string;
}