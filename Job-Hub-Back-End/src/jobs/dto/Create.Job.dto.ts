/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateJobDto {
  // This class represents the Data Transfer Object (DTO) for creating a job.
  // It defines the structure and validation rules for the job creation data.
  // The `@IsNotEmpty` decorator ensures that the `company` field is not empty.
  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  title: string;
  // The `title` property holds the job title and must be a non-empty string.

  @IsNotEmpty()
  @MinLength(10)
  description: string;
  // The `@MinLength(10)` decorator ensures that the `description` field has a minimum length of 10 characters.
  // The `description` property holds the job description and must be a non-empty string with at least 10 characters.

  @IsNotEmpty()
  @IsOptional()
  requirement: string;
  // The `@IsOptional` decorator allows the `requirement` field to be optional.
  // The `requirement` property holds the job requirements and is optional.

  @IsOptional()
  coverpage: string;
  // The `coverpage` property holds the cover page image or file path and is optional.

  @IsNotEmpty()
  link: string;
  // The `link` property holds the application link or form URL and must be a non-empty string.
}
