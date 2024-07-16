import { clerkClient } from '@clerk/clerk-sdk-node';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly logger = new Logger(ClerkAuthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const token = req.cookies.__session;
    if (!token) return false;

    try {
      const session = await clerkClient.verifyToken(token);
      const userId = session.sub;
      req[userId] = userId;
    } catch (err) {
      this.logger.error(err);
      return false;
    }

    return true;
  }
}
