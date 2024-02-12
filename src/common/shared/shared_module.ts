import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from '../err_filter/http_exeption';
import { TypeOrmExceptionFilter } from '../err_filter/orm_exeption';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtGuard } from '../guards/at.guard';
import { Organization, RoleAdmin, RoleClient, UserAdmin, UserClient } from 'src/entity/entity_admin';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAdmin, RoleAdmin, UserClient, RoleClient, Organization])
  ],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    },
    {
      provide: 'APP_FILTER',
      useClass: TypeOrmExceptionFilter,
    },
    {
      provide: 'APP_GUARD',
      useClass: AtGuard
    }
    
  ],
  exports: [
    TypeOrmModule.forFeature([UserAdmin, RoleAdmin, UserClient, RoleClient, Organization])
  ],
})
export class SharedModule {}
