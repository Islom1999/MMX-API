import { IsNotEmpty, IsString } from "class-validator"

export class UnitCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string
}

export class UnitUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string 
}