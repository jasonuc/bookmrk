import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleInit() {
    this.$connect().then(() => {
      console.log('Connected to DB');
    });
  }

  onModuleDestroy() {
    this.$disconnect().then(() => {
      console.log('Disconnected from DB');
    });
  }
}
