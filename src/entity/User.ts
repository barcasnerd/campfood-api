import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
//import { ProductPurchase } from "./ProductPurchase";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string
}
