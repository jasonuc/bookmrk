import { Module } from '@nestjs/common';
import { ShelvesService } from './shelves.service';
import { ShelvesController } from './shelves.controller';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ShelvesController],
  providers: [ShelvesService],
  exports: [ShelvesService],
})
export class ShelvesModule {}
