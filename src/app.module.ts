import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './common';
import { AdminModule, ClientModule } from './modules';
import { DatabaseBaseModule } from './database';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    DatabaseBaseModule,
    SharedModule,

    AdminModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
