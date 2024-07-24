import { Book, Status } from '@prisma/client';

export class BookEntity implements Book {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  status: Status;
  userId: string;
  lastUpdated: Date;
  dateAdded: Date;
}
