import { BookDomain } from "src/book/domain/book.domain";

export interface IGetAllBookService {
    find(): Promise<BookDomain[]>
}