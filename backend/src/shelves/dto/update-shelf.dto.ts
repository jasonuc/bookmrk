import { PartialType } from '@nestjs/mapped-types';
import { CreateShelfDto } from './create-shelf.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateShelfDto extends PartialType(CreateShelfDto) {
  @IsNotEmpty()
  @IsString()
  userId: string;
}
