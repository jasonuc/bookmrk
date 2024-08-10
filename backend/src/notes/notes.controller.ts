import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('notes')
@UsePipes(new ValidationPipe({ whitelist: true }))
@UseGuards(JwtAuthGuard)
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    return await this.notesService.create(createNoteDto);
  }

  @Get('book/:bookId')
  async findAllNoteByBook(@Param('bookId') bookId: string) {
    return this.notesService.findAllNoteByBookId(bookId);
  }

  @Get(':noteId')
  async findOne(@Param('noteId') noteId: string) {
    return this.notesService.findOneNote(noteId);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(id);
  }
}
