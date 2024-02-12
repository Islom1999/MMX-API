import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PermissionClient } from 'src/common';

export class RoleClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(PermissionClient, { each: true })
  permissions: PermissionClient[];
}