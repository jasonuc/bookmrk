import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async createNewBook(createBookDto: CreateBookDto) {
    const newBook = await this.prisma.book.create({
      data: { ...createBookDto },
    });

    return newBook;
  }

  async findAllBooksByUserId(userId: string) {
    const userBooks = await this.prisma.book.findMany({
      where: { userId },
    });

    return userBooks;
  }

  async findOneBook(id: string) {
    const userBook = await this.prisma.book.findUnique({
      where: { id },
    });
    return userBook;
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
