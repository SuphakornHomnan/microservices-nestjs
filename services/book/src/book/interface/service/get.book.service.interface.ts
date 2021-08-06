import { BookDomain } from "src/book/domain/book.domain";

export interface IGetBookService {
    findById(id: number): Promise<BookDomain>
}