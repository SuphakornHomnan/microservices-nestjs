import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm'
import { BookModule } from './book/book.module';
import { Book } from './book/domain/book.entity';
import { configService } from './config/config.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...configService.getTypeOrmConfig(),
    entities: [Book]
  }), BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
