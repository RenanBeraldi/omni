import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "src/entities/Transaction";

@Injectable()
export class TransactionRepository {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>,
    ) {}

    /**
     *
     *
     * @param {string} fromUser
     * @param {string} toUser
     * @param {number} amount
     *
     * @return {string}
     */
    public async createTransaction(
        fromUser: string,
        toUser: string,
        amount: number,
    ): Promise<Transaction> {
        const transaction = this.transactionRepository.create({
            fromUser: { id: fromUser },
            toUser: { id: toUser },
            amount,
            createdAt: new Date().toISOString().split("T")[0], // YYYY-MM-DD
        });

        return this.transactionRepository.save(transaction);
    }
}
