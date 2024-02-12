import { Module } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { Organization, RoleClient, UserClient } from 'src/entity/entity_admin';

@Module({
  controllers: [OrganisationController],
  providers: [OrganisationService],
  imports: [
    SharedModule,
    TypeOrmModule.forFeature([
      Organization, 
      UserClient, 
      RoleClient
    ]),
  ]
})
export class OrganisationModule {}
