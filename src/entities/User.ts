import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ type: "varchar", length: 10 }) // YYYY-MM-DD
    birthdate: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    balance: number;
}
