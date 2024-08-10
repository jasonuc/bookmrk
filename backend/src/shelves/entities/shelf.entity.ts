import { Shelf } from '@prisma/client';

export class ShelfEntity implements Shelf {
  id: string;
  name: string;
  description: string;
  userId: string;
}
