import {
    Injectable,
    ConflictException,
    NotFoundException,
} from "@nestjs/common";
import { UserRepository } from "../repositories/UserRepository";
import * as bcrypt from "bcrypt";
import { ResponseBuilder } from "src/common/utils/ResponseBuilder";

@Injectable()
export class UserService {
    private responseBuilder: ResponseBuilder;

    constructor(private readonly userRepo: UserRepository) {
        this.responseBuilder = new ResponseBuilder();
    }

    async signup(username: string, password: string, birthdate: string) {
        const existingUser = await this.userRepo.findByUsername(username);
        if (existingUser) {
            throw new ConflictException(
                "Already has a user with this username",
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userRepo.createUser(
            username,
            hashedPassword,
            birthdate,
        );

        return this.responseBuilder.created({ id: newUser.id });
    }

    async findAllUsers() {
        return this.userRepo.findAll();
    }
}
