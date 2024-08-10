import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateShelfDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
