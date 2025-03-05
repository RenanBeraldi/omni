import { IsString, IsNotEmpty, IsDateString } from "class-validator";

export class SignupDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsDateString()
    @IsNotEmpty()
    birthdate: string;
}
