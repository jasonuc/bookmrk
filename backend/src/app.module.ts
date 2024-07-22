import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { APP_GUARD } from '@nestjs/core';
// import { ClerkAuthGuard } from './guards/clerk-auth.guard';
import { BooksModule } from '@/books/books.module';

@Module({
  imports: [ConfigModule.forRoot(), BooksModule],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: ClerkAuthGuard,
    // },
  ],
})
export class AppModule {}
