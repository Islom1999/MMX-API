import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    providers: [],
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "islomdev",
            password: "islomdev123",
            database: "distribut_common",
            entities: ["./entity-admin/**/*.ts"],
            migrations: ["./migration/**/*.ts"],
            autoLoadEntities: true,
            synchronize: true,
            logging: false, 
            subscribers: [],
        }),
    ],
    exports: [
        TypeOrmModule
    ]
})
export class DatabaseBaseModule {}
