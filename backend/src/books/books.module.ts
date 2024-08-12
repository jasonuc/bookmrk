import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { ShelvesModule } from '@/shelves/shelves.module';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [PrismaModule, ShelvesModule, UsersModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
