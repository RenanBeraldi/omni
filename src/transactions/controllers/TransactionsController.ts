import { Body, Controller, Post } from "@nestjs/common";

@Controller("transactions")
export class TransactionsController {
    constructor() {}

    @Post("transfer")
    public makeTransfer(@Body() data: any): any {
        return;
    }
}
