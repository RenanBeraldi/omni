import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionsController } from "../controllers/TransactionsController";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { Transaction } from "src/entities/Transaction";
import { UsersModule } from "src/users/modules/UsersModule";
import { TransactionsService } from "../services/TransactionsService";
import { AuthModule } from "src/auth/modules/AuthModule";

@Module({
    imports: [TypeOrmModule.forFeature([Transaction]), UsersModule, AuthModule],
    controllers: [TransactionsController],
    providers: [TransactionRepository, TransactionsService],
    exports: [TransactionsService],
})
export class TransactionsModule {}
