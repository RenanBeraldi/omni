import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/User";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";
import { UserController } from "../controllers/UserController";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserRepository, UserService],
    controllers: [UserController],
    exports: [UserService, UserRepository], // Exportamos para que outros módulos possam usar
})
export class UsersModule {}
