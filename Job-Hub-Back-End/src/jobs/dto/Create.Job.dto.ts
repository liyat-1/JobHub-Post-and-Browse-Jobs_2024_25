/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @IsNotEmpty()
  @IsOptional()
  requirement: string;

  @IsOptional()
  coverpage: string;

  @IsNotEmpty()
  link: string;
}
