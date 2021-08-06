import { Injectable } from "@nestjs/common";
import { Client, ClientProxy, Transport } from "@nestjs/microservices";
import { BookDomain, BookDTO, IBookMQ } from "./domain/book.domain";

@Injectable()
export class BookService {
    @Client({
        transport: Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: 3000
        }
    }) private client: ClientProxy

    async create(data: BookDomain): Promise<IBookMQ> {
        return this.client.send<IBookMQ>("create_book", data).toPromise()

    }

    async getById(id: number): Promise<IBookMQ> {
        return this.client.send<IBookMQ, number>("get_book_by_id", id).toPromise()
    }

}