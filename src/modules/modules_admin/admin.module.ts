import { Module } from '@nestjs/common';
import { AuthAdminModule, AuthClientModule } from 'src/auth';
import { OrganisationModule } from 'src/modules/modules_admin/organisation/organisation.module';
import { RoleAdminModule } from 'src/modules/modules_admin/role-admin/role-admin.module';
import { RoleClientModule } from 'src/modules/modules_admin/role-client/role-client.module';
import { UserAdminModule } from 'src/modules/modules_admin/user-admin/user-admin.module';
import { UserClientModule } from 'src/modules/modules_admin/user-client/user-client.module';

@Module({
  imports: [
    AuthAdminModule,
    AuthClientModule,
    OrganisationModule,
    UserClientModule,
    RoleClientModule,
    RoleAdminModule,
    UserAdminModule,
  ],
  exports: [
    AuthAdminModule,
    AuthClientModule,
    OrganisationModule,
    UserClientModule,
    RoleClientModule,
    RoleAdminModule,
    UserAdminModule,
  ],
})
export class AdminModule {}
