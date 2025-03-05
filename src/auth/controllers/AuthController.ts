import { Controller, Post, Body, HttpCode } from "@nestjs/common";
import { AuthService } from "../services/AuthService";
import { SigninDTO } from "../dtos/SigninDTO";

@Controller("users")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signin")
    @HttpCode(200)
    public async signin(@Body() body: SigninDTO) {
        return this.authService.signin(body.username, body.password);
    }
}
