import { Module } from '@nestjs/common';
import { DbContextService } from 'src/common';
import { DatabaseConnectionProvider } from './database.connection';

@Module({
    providers: [
        DbContextService, 
        DatabaseConnectionProvider
    ],
    exports: [
        DbContextService,
        DatabaseConnectionProvider
    ]
})
export class DatabaseCostumModule {}
