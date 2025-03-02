import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "../services/AuthService";

@Controller("users")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signin")
    async signin(@Body() body: { username: string; password: string }) {
        return this.authService.signin(body.username, body.password);
    }
}
