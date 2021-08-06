import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./controller/book.controller";


@Module({
    providers: [BookController, BookService],
    exports: [BookService]
})
export class BookModule { }