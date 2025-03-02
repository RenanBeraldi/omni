import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/modules/UsersModule";
import { AuthService } from "../services/AuthService";
import { AuthController } from "../controllers/AuthController";

@Module({
    imports: [UsersModule],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
