import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { UsersService } from '@/users/users.service';
import { MY_BOOKSHELF } from '@/utils/constants';
import { ShelvesService } from '@/shelves/shelves.service';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly shelfService: ShelvesService,
  ) {}

  async createNewBook(createBookDto: CreateBookDto) {
    const { userId, shelfId, ...bookData } = createBookDto;

    const newBook = await this.prisma.book.create({
      data: {
        ...bookData,
        user: {
          connect: { id: userId },
        },
        shelf: {
          connect: { id: shelfId },
        },
      },
    });

    return newBook;
  }

  async createNewBookAndNewShelf(createBookDto: CreateBookDto) {
    const { userId, ...bookData } = createBookDto;

    const { id: shelfId } = await this.shelfService.createNewShelf({
      name: MY_BOOKSHELF,
      description: 'My literary universe.',
      colour: '#ffffff',
      userId: userId,
    });

    const newBook = await this.prisma.book.create({
      data: {
        ...bookData,
        shelfId: shelfId,
        userId: userId,
      },
    });

    return newBook;
  }

  async findAllBooksByUserId(userId: string) {
    const userBooks = await this.prisma.book.findMany({
      where: { userId },
      include: { shelf: true },
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
        shelf: true,
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
