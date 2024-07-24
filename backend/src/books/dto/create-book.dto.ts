import { Status } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  @IsUrl()
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

  @IsNotEmpty()
  @IsString()
  userId: string;
}
