import { Controller, Inject } from '@nestjs/common';
import { Book } from '../domain/book.entity';
import { MessagePattern, } from '@nestjs/microservices';
import { ICreateBookApplication } from "../interface/application/create.book.application.interface";
import { TYPES } from "../interface/type";
import { IGetBookApplication } from '../interface/application/get.book.application.interface';

@Controller('book')
export class BookController {
    constructor(
        @Inject(TYPES.applications.ICreateBookApplication) private createBookApp: ICreateBookApplication,
        @Inject(TYPES.applications.IGetBookApplication) private getBookApp: IGetBookApplication
    ) { }

    @MessagePattern('create_book')
    async create(book: Book) {
        const data = await this.createBookApp.create(book);
        const result = {
            status: 201,
            message: "create_book_success",
            book: data
        }
        return result
    }

    @MessagePattern('get_book_by_id')
    async findById(id: number) {
        const data = await this.getBookApp.findById(id)
        const result = {
            status: 200,
            message: "get_book_by_id",
            book: data
        }
        if (!data) {
            result.status = 404
        }

        return result
    }
}