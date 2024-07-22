import { PrismaService } from '@/prisma/prisma.service';
import { ClerkClient, User } from '@clerk/clerk-sdk-node';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly clerk: ClerkClient,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { id, username } = createUserDto;
    const newUser = await this.prisma.user.create({
      data: { id, username },
    });

    if (newUser) return await this.clerk.users.getUser(id);

    throw new BadRequestException();
  }

  async getUserById(userId: string): Promise<User | false> {
    const user = await this.clerk.users.getUser(userId);
    const userRegisteredInDB = await this.checkUserRegisteredInDB(user.id);
    if (!userRegisteredInDB) return false;
    return user;
  }

  async checkUserRegisteredInDB(id: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (user) return true;
    return false;
  }

  async checkIfUsernameChanged(sessionId: string) {}
}
