import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    BeforeInsert,
} from "typeorm";
import { User } from "../entities/User";
import { format } from "date-fns";

@Entity("transactions")
export class Transaction {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User)
    fromUser: User;

    @ManyToOne(() => User)
    toUser: User;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    amount: number;

    @Column({ type: "varchar", length: 10 }) // Will be saved as a
    createdAt: string;

    @BeforeInsert()
    setCreatedAt() {
        this.createdAt = format(new Date(), "yyyy-MM-dd");
    }
}
