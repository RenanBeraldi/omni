import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { TransactionsService } from "../services/TransactionsService";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { TransferDTO } from "../dtos/TransferDTO";

@Controller("transfer")
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post()
    @HttpCode(204)
    @UseGuards(AuthGuard("jwt"))
    public async makeTransfer(@Body() data: TransferDTO): Promise<void> {
        return this.transactionsService.transferMoney(
            data.fromId,
            data.toId,
            data.amount,
        );
    }
}
