import { IsString, IsNotEmpty } from "class-validator";

export class SigninDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
