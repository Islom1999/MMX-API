import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PermissionAdmin } from 'src/common';

export class RoleAdminDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(PermissionAdmin, { each: true })
  permissions: PermissionAdmin[];
}