import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BookDomain } from '../domain/book.domain';
import { Book } from '../domain/book.entity';
import { IGetBookService } from "../interface/service/get.book.service.interface";

@Injectable()
export class GetBookService implements IGetBookService {
    constructor(@InjectRepository(Book) private userRepo: Repository<Book>) { }

    async findById(id: number): Promise<BookDomain> {
        return this.userRepo.findOne({ bookId: id });
    }
}