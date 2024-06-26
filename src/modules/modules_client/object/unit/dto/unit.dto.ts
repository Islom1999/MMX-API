import { IsNotEmpty, IsString } from "class-validator"

export class UnitCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    full_name: string

    @IsNotEmpty()
    @IsString()
    global_name: string
}

export class UnitUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    full_name: string

    @IsNotEmpty()
    @IsString()
    global_name: string
}