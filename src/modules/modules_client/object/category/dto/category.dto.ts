import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CategoryCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsBoolean()
    use_characteristic :boolean

    @IsNotEmpty()
    @IsString()
    unit_id: string;
}

export class CategoryUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsBoolean()
    use_characteristic :boolean

    @IsNotEmpty()
    @IsString()
    unit_id: string;
}