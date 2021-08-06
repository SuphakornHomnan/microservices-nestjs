import { BookDomain } from "src/book/domain/book.domain";

export interface ICreateBookService {
    create(bookDomain: BookDomain): Promise<BookDomain>
}