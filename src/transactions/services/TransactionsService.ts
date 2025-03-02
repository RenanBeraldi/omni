import { Injectable } from "@nestjs/common";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { UserRepository } from "src/users/repositories/UserRepository";
import { ResponseBuilder } from "src/common/utils/ResponseBuilder";
import { response } from "express";

@Injectable()
export class TransactionsService {
    private responseBuilder: ResponseBuilder;

    constructor(
        private readonly transactionRepository: TransactionRepository,
        private readonly userRepository: UserRepository,
    ) {}

    /**
     *
     * @param {string} fromId
     * @param {string} toId
     * @param {number} amount
     *
     * @return {Promise<void> | any}
     */
    async transferMoney(
        fromId: string,
        toId: string,
        amount: number,
    ): Promise<void> {
        const fromUser = await this.userRepository.findById(fromId);
        const toUser = await this.userRepository.findById(toId);

        if (!fromUser) {
            return this.responseBuilder.notFound(
                "User that is sending not found.",
            );
        } else if (!toUser) {
            return this.responseBuilder.notFound(
                "User that will receive the transfer not found",
            );
        }

        await this.transactionRepository.createTransaction(
            fromId,
            toId,
            amount,
        );
    }
}
