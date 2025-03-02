import { Controller, Post, Body } from "@nestjs/common";

@Controller("authorize")
export class AuthController {
    constructor() {}

    @Post("/users/signin")
    public authorizeUserSignin(@Body() data: any): any {
        return;
    }
}
