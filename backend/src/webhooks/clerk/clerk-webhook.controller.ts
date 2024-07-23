import { Controller, Post, Req, Res } from '@nestjs/common';
import { Webhook } from 'svix';
import { Request, Response } from 'express';
import { WebhookEventType } from '@clerk/clerk-sdk-node';
import { UsersService } from '@/users/users.service';

@Controller('webhooks/clerk')
export class ClerkWebhookController {
  constructor(private usersService: UsersService) {}

  @Post()
  async post(@Req() req: Request, @Res() res: Response) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET)
      throw new Error('You need a WEBHOOK_SECRET in your .env');

    // Get the headers and body
    const headers = req.headers;
    const payload = req.body;

    // Get the Svix headers for verification
    const svix_id = headers['svix-id'] as string;
    const svix_timestamp = headers['svix-timestamp'] as string;
    const svix_signature = headers['svix-signature'] as string;

    // If there are no Svix headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error occured -- no svix headers', {
        status: 400,
      });
    }

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;

    // Attempt to verify the incoming webhook
    // If successful, the payload will be available from 'evt'
    // If the verification fails, error out and  return error code
    try {
      evt = wh.verify(payload, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      });
    } catch (err) {
      console.log('Error verifying webhook:', err.message);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    // Do something with the payload
    // For this guide, you simply log the payload to the console
    const { id, username } = evt.data;
    const eventType: WebhookEventType = evt.type;

    if (eventType === 'user.created') {
      const newUser = { id, username };
      await this.usersService.createUser(newUser);
    } else if (eventType === 'user.updated') {
      const userToUpdate = { id, username };
      await this.usersService.updateUser(userToUpdate);
    } else if (eventType === 'user.deleted') {
      await this.usersService.deleteUser(id);
    }

    return res.status(200).json({
      success: true,
      message: 'Webhook received',
    });
  }
}
