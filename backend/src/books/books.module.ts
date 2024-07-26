import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { UsersService } from '@/users/users.service';

@Module({
  imports: [PrismaModule],
  controllers: [BooksController],
  providers: [BooksService, UsersService],
})
export class BooksModule {}
