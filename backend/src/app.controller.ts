import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';
import { User } from '@/decorators/user.decorator';
import { UserEntity } from './decorators/entities/user.entity';

@Controller()
@UseGuards(JwtAuthGuard)
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getSomething(@User() user: UserEntity) {
    return user;
  }
}
