import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { UsersService } from '@/users/users.service';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

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

  async findBook(id: string) {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, username: true },
        },
      },
    });
    if (!book) throw new BadRequestException(`BOOK ID: {${id}} DOES NOT EXIST`);

    return book;
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto) {
    await this.findBook(id);
    const updatedBook = await this.prisma.book.update({
      where: { id },
      data: { ...updateBookDto },
    });

    return updatedBook;
  }

  async deleteOneBook(id: string) {
    await this.findBook(id);
    const deletedBook = await this.prisma.book.delete({ where: { id } });

    return deletedBook;
  }

  async deleteAllUserBooks(userId: string) {
    await this.usersService.findUserById(userId);
    const userBooks = await this.prisma.book.deleteMany({ where: { userId } });

    return userBooks;
  }
}
