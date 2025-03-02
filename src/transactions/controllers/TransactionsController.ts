import { Body, Controller, Post } from "@nestjs/common";
import { TransactionsService } from "../services/TransactionsService";

@Controller("transfer")
// @UseGuards()
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post()
    public makeTransfer(
        @Body() data: { fromId: string; toId: string; amount: number },
    ): any {
        return this.transactionsService.transferMoney(
            data.fromId,
            data.toId,
            data.amount,
        );
    }
}
