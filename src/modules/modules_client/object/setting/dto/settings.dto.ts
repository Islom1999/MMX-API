import { IsNotEmpty, IsString } from "class-validator";


export class SettingsUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    currency_id: string;
}

