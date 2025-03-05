import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/modules/UsersModule";
import { AuthModule } from "./auth/modules/AuthModule";
import { TransactionsModule } from "./transactions/modules/TransactionsModule";
import { User } from "./entities/User";
import { Transaction } from "./entities/Transaction";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "",
            database: "omni",
            autoLoadEntities: true,
            entities: [User, Transaction],
            synchronize: true,
        }),
        UsersModule,
        AuthModule,
        TransactionsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
