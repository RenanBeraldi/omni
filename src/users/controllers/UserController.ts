import {
    Controller,
    Post,
    Get,
    Body,
    UseGuards,
    HttpCode,
} from "@nestjs/common";
import { UserService } from "../services/UserService";
import { AuthGuard } from "@nestjs/passport";
import { SignupDTO } from "../dtos/SignupDTO";

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard("jwt"))
    async getUsers() {
        return this.userService.findAllUsers();
    }

    @Post("signup")
    @HttpCode(201)
    async signup(@Body() body: SignupDTO) {
        return this.userService.signup(
            body.username,
            body.password,
            body.birthdate,
        );
    }
}
