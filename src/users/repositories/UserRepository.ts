import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/User";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    /**
     *
     * @param {string} username
     * @param {string} password
     * @param {string} birthdate
     *
     * @return {Promise<User>}
     */
    public async createUser(
        username: string,
        password: string,
        birthdate: string,
    ): Promise<User> {
        const user = this.userRepository.create({
            username,
            password,
            birthdate,
        });
        return this.userRepository.save(user);
    }

    public async findByUsername(username: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { username } });
    }

    public async findById(id: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { id } });
    }

    public async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}
