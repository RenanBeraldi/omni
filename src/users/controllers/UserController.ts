import { Controller, Post, Get, Body, UseGuards } from "@nestjs/common";
import { UserService } from "../services/UserService";
import { AuthGuard } from "@nestjs/passport";

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @UseGuards(AuthGuard("jwt"))
    async getUsers() {
        return this.userService.findAllUsers();
    }

    @Post("signup")
    async signup(
        @Body() body: { username: string; password: string; birthdate: string },
    ) {
        return this.userService.signup(
            body.username,
            body.password,
            body.birthdate,
        );
    }
}
