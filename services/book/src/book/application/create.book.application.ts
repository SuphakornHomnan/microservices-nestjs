import { Injectable, Inject } from '@nestjs/common';
import { BookDomain } from '../domain/book.domain';
import { ICreateBookApplication } from "../interface/application/create.book.application.interface";
import { ICreateBookService } from '../interface/service/create.book.service.interface'
import { TYPES } from '../interface/type';

@Injectable()
export class CreateBookApp implements ICreateBookApplication {
    constructor(@Inject(TYPES.services.ICreateBookService) private bookService: ICreateBookService) { }

    async create(book: BookDomain): Promise<BookDomain> {
        return this.bookService.create(book)
    }

}