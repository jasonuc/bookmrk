import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  get(@Req() req: Request) {
    return `${req.cookies.__session}`; // Makes development Easier
  }
}
