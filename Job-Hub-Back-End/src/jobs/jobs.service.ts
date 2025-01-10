/* eslint-disable prettier/prettier */

import { UsersService } from './../users/users.service';
import { User } from './../users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/Create.Job.dto';
import { UpdateJobDto } from './dto/Update.Job.dto';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job) private jobsRepository: Repository<Job>,
    private readonly userService: UsersService,
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobsRepository.find();
  }
  findOne(title: string): Promise<Job> {
    return this.jobsRepository.findOneBy({ title });
  }

  async createJob(createJobDto: CreateJobDto, user: User, image: string) {
    const newJob = this.jobsRepository.create(createJobDto);

    newJob.createdBy = await this.userService.findOne(user.username);
    newJob.coverPage = image;
    return this.jobsRepository.save(newJob);
  }

  async remove(id: number, user: { userId: number; username: string }) {
    const job = await this.findById(id);
    if (job.createdBy.id !== user.userId) {
      throw new ForbiddenException('Action Forbidden.', {
        cause: new Error(),
        description: 'Jobs can only be deleted by the users that created them.',
      });
    }
    await this.jobsRepository.delete(id);
    return {};
  }

  async updateJob(id: number, updateJobDto: UpdateJobDto, user, image: string) {
    const job = await this.findById(id);
    if (job.createdBy.id !== user.userId) {
      throw new ForbiddenException('Action Forbidden.', {
        cause: new Error(),
        description: 'Jobs can only be updated by the users that created them.',
      });
    }

    updateJobDto.coverPage = image;

    const updatedJob = this.jobsRepository.merge(job, updateJobDto);
    console.log(updateJobDto);
    await this.jobsRepository.save(updatedJob);
    return {};
  }

  async findById(id: number): Promise<Job> {
    const job = await this.jobsRepository.findOne({
      where: { id },
      relations: ['createdBy'],
    });
    if (!job) {
      throw new NotFoundException("Job doesn't exist.");
    }
    return job;
  }
}
