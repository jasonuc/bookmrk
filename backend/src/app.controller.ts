import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUnprotected() {
    return this.appService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getProtected(@Param('id') id) {
    return this.appService.findOne(id);
  }
}
