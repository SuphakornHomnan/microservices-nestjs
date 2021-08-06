import { Module } from '@nestjs/common';
import { BookService } from './books/book.service';
import { BookModule } from './books/books.module';
import { BookController } from './books/controller/book.controller';

@Module({
  imports: [BookModule],
  controllers: [BookController],
  providers: [BookService]
})
export class AppModule { }
