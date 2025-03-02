import { Body, Controller, Post } from "@nestjs/common";

@Controller("users")
export class UsersController {
    constructor() {}

    @Post()
    public listUsers(@Body() data: any): any {
        return;
    }

    @Post("signup")
    public userSignup(@Body() data: any): any {
        return;
    }
}
