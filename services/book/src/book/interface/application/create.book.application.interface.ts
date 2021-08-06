import { BookDomain } from "src/book/domain/book.domain";

export interface ICreateBookApplication {
    create(bookDomain: BookDomain): Promise<BookDomain>
}