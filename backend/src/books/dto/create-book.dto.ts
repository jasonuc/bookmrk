import { Status } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Status)
  status: Status;

  @IsOptional()
  @IsString()
  shelfId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
