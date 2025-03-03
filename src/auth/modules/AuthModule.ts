import { Module } from "@nestjs/common";
import { AuthService } from "../services/AuthService";
import { AuthController } from "../controllers/AuthController";
import { UserRepository } from "src/users/repositories/UserRepository";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/User";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "../strategies/JwtStrategy";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
            secret: "Y5h7$GtZ!2dXoQ#L9sJkV1pA3fM@dT6u",
            signOptions: {
                expiresIn: "1d",
            },
        }),
        TypeOrmModule.forFeature([User]),
    ],
    providers: [AuthService, UserRepository, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService, JwtStrategy, PassportModule],
})
export class AuthModule {}
