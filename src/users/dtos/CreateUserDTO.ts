import { IsString, Matches } from "class-validator";

export class CreateUserDTO {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
        message: "birthdate must be in YYYY-MM-DD format",
    })
    birthdate: string;
}
