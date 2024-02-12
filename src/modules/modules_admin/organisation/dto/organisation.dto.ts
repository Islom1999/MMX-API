import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class OrganisationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  database_name: string;

  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}