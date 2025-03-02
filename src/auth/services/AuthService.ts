import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "src/users/repositories/UserRepository";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthService {
    constructor(private readonly userRepo: UserRepository) {}

    async signin(username: string, password: string) {
        const user = await this.userRepo.findByUsername(username);
        if (!user) throw new UnauthorizedException("Credenciais inválidas");

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new UnauthorizedException("Credenciais inválidas");

        const token = jwt.sign({ id: user.id }, "secreto", { expiresIn: "1h" });
        return { token, expiresIn: "1h" };
    }
}
