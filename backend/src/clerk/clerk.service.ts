import { ForbiddenException, Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';

@Injectable()
export class ClerkService {
  async getUser(userId: string) {
    try {
      const user = await clerkClient.users.getUser(userId);
      return user;
    } catch (err) {
      throw new ForbiddenException();
    }
  }
}
