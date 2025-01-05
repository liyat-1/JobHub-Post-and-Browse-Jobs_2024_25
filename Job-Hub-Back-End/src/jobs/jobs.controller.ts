/* eslint-disable prettier/prettier */
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Delete,
  ParseIntPipe,
  UseGuards,
  Request,
  Res,
  UseInterceptors,
  ClassSerializerInterceptor,
  UploadedFile,
} from '@nestjs/common';

import { Param, Patch } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/Create.Job.dto';
import { UpdateJobDto } from './dto/Update.Job.dto';

export const storage = {
  storage: diskStorage({
    destination: './covers',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;
      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}
  @Get()
  getAllJobs() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  getJob(@Param('id', ParseIntPipe) id) {
    return this.jobsService.findById(id);
  }

  @Get('cover/:imageName')
  getJobCover(@Param('imageName') imageName: string, @Res() res) {
    return res.sendFile(path.join(process.cwd(), 'covers/' + imageName));
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('coverPage', storage))
  createJob(
    @Body() createJobDto: CreateJobDto,
    @Request() req,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    console.log(createJobDto);
    return this.jobsService.createJob(createJobDto, req.user, file.path);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  removeJob(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.jobsService.remove(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('coverPage', storage))
  updateJob(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJobDto: UpdateJobDto,
    @Request() req,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.jobsService.updateJob(id, updateJobDto, req.user, file.path);
  }
}
