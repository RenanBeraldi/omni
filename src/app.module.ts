import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/modules/UsersModule";
import { AuthModule } from "./auth/modules/AuthModule";
import { TransactionsModule } from "./transactions/modules/TransactionsModule";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "Regis22041980!",
            database: "omni",
            autoLoadEntities: true,
        }),
        UsersModule,
        AuthModule,
        TransactionsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
