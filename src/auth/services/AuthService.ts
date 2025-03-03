import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "src/users/repositories/UserRepository";
import { ResponseBuilder } from "src/common/utils/ResponseBuilder";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    private responseBuilder: ResponseBuilder;

    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {
        this.responseBuilder = new ResponseBuilder();
    }

    /**
     * This method signin the user, passying by it's username and password, verifying if it's created,
     * if not throws an UnauthorizedException, otherwise, creates a JWT token for it's expirying in 1h
     *
     * @param {string} username
     * @param {string} password
     *
     * @return {any} Returns a standardize response containing the token and it's expiration time.
     */
    public async signin(username: string, password: string) {
        const user = await this.userRepository.findByUsername(username);

        if (!user || user.password !== password) {
            throw new UnauthorizedException("Invalid Credentials");
        }

        const payload = { sub: user.id, username: user.username };

        return this.responseBuilder.success({
            token: this.jwtService.sign(payload),
            expiresIn: "1h",
        });
    }
}
