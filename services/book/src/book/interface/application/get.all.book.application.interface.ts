import { BookDomain } from "src/book/domain/book.domain";

export interface IGetAllBookApplication {
    find(): Promise<BookDomain[]>
}