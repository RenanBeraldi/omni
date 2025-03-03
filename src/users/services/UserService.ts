import { Injectable, ConflictException } from "@nestjs/common";
import { UserRepository } from "../repositories/UserRepository";
import * as bcrypt from "bcrypt";
import { ResponseBuilder } from "src/common/utils/ResponseBuilder";

@Injectable()
export class UserService {
    private responseBuilder: ResponseBuilder;

    constructor(private readonly userRepo: UserRepository) {
        this.responseBuilder = new ResponseBuilder();
    }

    /**
     * This method creates a new user in Database, passing by the username, the password and the birth date,
     * verifying if already there is a user with the same username that was passed through argument
     *
     * @param {string} username The username that will be created
     * @param {string} password The password new password
     * @param {string} birthdate User's birth date
     *
     * @return {any} Return a standardized Created response, containing the Status Code and the response
     * payload, with the new created user id
     */
    public async signup(username: string, password: string, birthdate: string) {
        // Verifies if already has a user with the username
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
