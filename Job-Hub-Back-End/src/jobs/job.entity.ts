/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';
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
  coverPage: string; //online image, the application will still work offline just won't display cover image

  @ManyToOne(() => User, (user) => user.created, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  createdBy: User;
}
