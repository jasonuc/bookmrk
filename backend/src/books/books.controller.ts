import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { UserId } from '@/decorators/user-id.decorator';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('books')
@UsePipes(new ValidationPipe({ whitelist: true }))
@UseGuards(JwtAuthGuard)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    if (createBookDto.shelfId) {
      return await this.booksService.createNewBook(createBookDto);
    } else {
      return await this.booksService.createNewBookAndNewShelf(createBookDto);
    }
  }

  @Get()
  async findAll(@UserId() userId: string) {
    return await this.booksService.findAllBooksByUserId(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.booksService.findBook(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return await this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async deleteOneBook(@Param('id') id: string) {
    return await this.booksService.deleteOneBook(id);
  }

  @Delete('user/:userId')
  async deleteAllUserBooks(@Param('userId') userId: string) {
    return await this.booksService.deleteAllUserBooks(userId);
  }
}
