import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ShelvesService } from './shelves.service';
import { CreateShelfDto } from './dto/create-shelf.dto';
import { UpdateShelfDto } from './dto/update-shelf.dto';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('shelves')
@UsePipes(new ValidationPipe({ whitelist: true }))
@UseGuards(JwtAuthGuard)
export class ShelvesController {
  constructor(private readonly shelvesService: ShelvesService) {}

  @Post()
  create(@Body() createShelfDto: CreateShelfDto) {
    return this.shelvesService.createNewShelf(createShelfDto);
  }

  @Get('user/:userId')
  findAll(@Param('userId') userId: string) {
    return this.shelvesService.findAllUserShelves(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shelvesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShelfDto: UpdateShelfDto) {
    return this.shelvesService.update(id, updateShelfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shelvesService.remove(id);
  }
}
