import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { APP_GUARD } from '@nestjs/core';
// import { ClerkAuthGuard } from './guards/clerk-auth.guard';
import { BooksModule } from '@/books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), BooksModule, UsersModule],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: ClerkAuthGuard,
    // },
  ],
})
export class AppModule {}
