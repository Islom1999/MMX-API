import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ProductGroupCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsOptional()
    @IsString()
    group_id?: string

    @IsNotEmpty()
    @IsString()
    category_id: string
}

export class ProductGroupUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsOptional()
    @IsString()
    group_id?: string

    @IsNotEmpty()
    @IsString()
    category_id: string
}