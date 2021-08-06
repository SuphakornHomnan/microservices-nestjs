import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './controller/book.controller';
import { Book } from './domain/book.entity';
import { TYPES } from './interface/type';
import { CreateBookApp } from "./application/create.book.application"
import { CreateBookService } from './service/create.book.service';
import { GetBookApplication } from './application/get.book.application';
import { GetBookService } from './service/get.book.service';
const createBookApp = { provide: TYPES.applications.ICreateBookApplication, useClass: CreateBookApp }
const createBookService = { provide: TYPES.services.ICreateBookService, useClass: CreateBookService }
const getBookApp = { provide: TYPES.applications.IGetBookApplication, useClass: GetBookApplication }
const getBookService = { provide: TYPES.services.IGetBookService, useClass: GetBookService }

@Module({
    imports: [
        TypeOrmModule.forFeature([Book])
    ],
    controllers: [BookController],
    providers: [createBookApp, createBookService, getBookApp, getBookService]
})
export class BookModule { }