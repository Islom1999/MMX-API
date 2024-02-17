import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization, RoleAdmin, RoleClient, UserAdmin, UserClient } from 'src/entity/entity_admin';

@Module({
    providers: [],
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "islomdev",
            password: "islomdev123",
            database: "distribut_common_v1",
            entities: [UserAdmin, UserClient, RoleAdmin, RoleClient, Organization],
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
