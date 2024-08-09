import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      isGlobal: true,
    }),
    AuthModule,
    WebhooksModule,
    UsersModule,
    BooksModule,
    NotesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
