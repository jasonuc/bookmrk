import { Module } from '@nestjs/common';
import { ClerkWebhookController } from './clerk/clerk-webhook.controller';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [ClerkWebhookController],
  providers: [],
})
export class WebhooksModule {}
