/* eslint-disable prettier/prettier */
import { MinLength, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateJobDto {
  @IsOptional()
  @IsNotEmpty()
  company: string;

  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @IsNotEmpty()
  @IsOptional()
  requirement: string;

  @IsOptional()
  @IsNotEmpty()
  coverPage: string;

  @IsNotEmpty()
  link: string;
}
