/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsUrl } from 'class-validator';
import { User } from '../users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column()
  title: string;

  @Column('longtext')
  description: string;

  @Column('longtext')
  @IsNotEmpty()
  requirement: string;

  @Column({ default: '' })
  coverPage: string;

  @Column({ nullable: true })
  @IsUrl()
  link: string;

  @ManyToOne(() => User, (user) => user.created, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  createdBy: User;
}
