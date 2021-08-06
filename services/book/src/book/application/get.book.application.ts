import { Injectable, Inject } from '@nestjs/common';
import { BookDomain } from '../domain/book.domain';
import { IGetBookApplication } from '../interface/application/get.book.application.interface';
import { IGetBookService } from '../interface/service/get.book.service.interface';
import { TYPES } from '../interface/type';

@Injectable()
export class GetBookApplication implements IGetBookApplication {
    constructor(@Inject(TYPES.services.IGetBookService) private bookService: IGetBookService) { }

    async findById(id: number): Promise<BookDomain> {
        return this.bookService.findById(id)
    }

}