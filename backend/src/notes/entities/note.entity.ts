import { Note } from '@prisma/client';

export class NoteEntity implements Note {
  id: string;
  content: string;
  bookId: string;
  createdAt: Date;
}
