import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn("increment")
    bookId: number

    @Column()
    name: string

    @Column()
    totalPage: number

    @Column()
    author: string
}