import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get()
  get(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.json({ 'Session ID': `${req.cookies.__session}` });
  }
}
