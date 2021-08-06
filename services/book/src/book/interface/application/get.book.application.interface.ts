import { BookDomain } from "src/book/domain/book.domain";

export interface IGetBookApplication {
    findById(id: number): Promise<BookDomain>
}