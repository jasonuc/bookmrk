import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  createNewUserBook(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAllUserBooks() {
    return `This action returns all books`;
  }

  findOneUserBook(id: number) {
    return `This action returns a #${id} book`;
  }

  updateUserBook(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  removeUserBook(id: number) {
    return `This action removes a #${id} book`;
  }
}
