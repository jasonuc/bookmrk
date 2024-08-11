import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateShelfDto } from './dto/create-shelf.dto';
import { UpdateShelfDto } from './dto/update-shelf.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { MY_BOOKSHELF } from '@/utils/constants';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ShelvesService {
  constructor(private readonly prisma: PrismaService) {}

  async createNewShelf(createShelfDto: CreateShelfDto) {
    const newShelf = await this.prisma.shelf.create({
      data: { ...createShelfDto },
    });

    return newShelf;
  }

  async findAllUserShelves(userId: string) {
    const allUserShelves = await this.prisma.shelf.findMany({
      where: { userId },
      include: { book: true },
    });

    return allUserShelves;
  }

  async findOne(id: string) {
    return await this.prisma.shelf.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  async update(id: string, updateShelfDto: UpdateShelfDto) {
    const shelfExists = await this.findOne(id);

    if (!shelfExists) throw new NotFoundException();

    return await this.prisma.shelf.update({
      data: { ...updateShelfDto },
      where: { id },
    });
  }

  async remove(id: string) {
    const findShelf = await this.findOne(id);
    if (findShelf.name === MY_BOOKSHELF)
      throw new BadRequestException('This shelf can not be deleted');

    try {
      return await this.prisma.shelf.delete({ where: { id } });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'This shelf can not be deleted as it still has books in it. Transfer those books to another shelf then delete.',
        );
      }
    }
  }
}
