import { PermissionAdmin } from "../enums/permission_admin";
import { RoleTypeAdmin } from "../enums/role_type";

export interface IRoleData {
  name: RoleTypeAdmin | string;
  permissions: PermissionAdmin[] | string[];
}
