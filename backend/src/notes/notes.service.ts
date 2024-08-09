import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNoteDto: CreateNoteDto) {
    const { content, bookId } = createNoteDto;

    const newNote = await this.prisma.note.create({
      data: { content, bookId },
      include: { book: true },
    });

    return newNote;
  }

  async findAllNoteByBookId(bookId: string) {
    const allUserNotesForBook = await this.prisma.note.findMany({
      where: { bookId },
    });

    return allUserNotesForBook;
  }

  async findOneNote(noteId: string) {
    const note = await this.prisma.note.findUnique({
      where: { id: noteId },
    });

    return note;
  }

  async deleteNote(noteId: string) {
    return this.prisma.note.delete({
      where: { id: noteId },
    });
  }
}
