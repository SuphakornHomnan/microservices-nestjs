import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BookDomain } from '../domain/book.domain';
import { Book } from '../domain/book.entity';
import { ICreateBookService } from "../interface/service/create.book.service.interface";

@Injectable()
export class CreateBookService implements ICreateBookService {
    constructor(@InjectRepository(Book) private bookRepo: Repository<Book>){}
    
    async create(user: BookDomain): Promise<BookDomain> {
        return this.bookRepo.save(user);
    }

}