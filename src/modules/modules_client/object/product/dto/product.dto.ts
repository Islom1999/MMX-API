import { IsNotEmpty, IsString } from "class-validator"

export class ProductCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsNotEmpty()
    @IsString()
    group_id: string

    @IsNotEmpty()
    @IsString()
    category_id: string

    @IsNotEmpty()
    @IsString()
    product_unit_id: string
}

export class ProductUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsNotEmpty()
    @IsString()
    group_id: string

    @IsNotEmpty()
    @IsString()
    category_id: string

    @IsNotEmpty()
    @IsString()
    product_unit_id: string
}



