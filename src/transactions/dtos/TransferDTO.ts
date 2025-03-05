import { IsString, IsNotEmpty, IsNumber, Min } from "class-validator";

export class TransferDTO {
    @IsString()
    @IsNotEmpty()
    fromId: string;

    @IsString()
    @IsNotEmpty()
    toId: string;

    @IsNumber()
    @Min(1)
    amount: number;
}
