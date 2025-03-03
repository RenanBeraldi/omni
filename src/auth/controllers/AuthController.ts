import { Controller, Post, Body, HttpCode } from "@nestjs/common";
import { AuthService } from "../services/AuthService";

@Controller("users")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signin")
    @HttpCode(200)
    public async signin(@Body() body: { username: string; password: string }) {
        return this.authService.signin(body.username, body.password);
    }
}
