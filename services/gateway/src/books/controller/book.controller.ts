import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { BookService } from '../book.service'
import { BookDomain, BookDTO } from '../domain/book.domain'

@Controller("book")
export class BookController {
    constructor(
        private readonly bookService: BookService
    ) { }

    @Post()
    async create(@Body() data: BookDomain, @Res() res): Promise<Response> {
        const result = await this.bookService.create(data)
        return res.status(result.status).json(result)
    }

    @Get(':id')
    async getById(@Param('id') id: number, @Res() res): Promise<Response> {
        const result = await this.bookService.getById(id)

        return res.status(result.status).json(result)
    }
}