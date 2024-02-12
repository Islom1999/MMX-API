import { Module } from '@nestjs/common';
import { DbContextService, SharedModule } from 'src/common';
import { JwtModule } from '@nestjs/jwt';
import { UnitModule } from './object/unit/unit.module';

@Module({
  providers: [
    DbContextService,
  ],
  controllers: [],
  imports: [
    // SharedModule,
    JwtModule.register({}),

    UnitModule,
  ],
  exports: [
    UnitModule
  ]
})
export class ClientModule {}
