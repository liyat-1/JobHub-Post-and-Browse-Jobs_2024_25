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
// The `@Entity()` decorator marks the `Job` class as a database table.
export class Job {
  // The `Job` class represents the structure of the `Job` entity, which maps to a database table.
  @PrimaryGeneratedColumn()
  id: number;
  // `id` is the primary key for the `Job` table.
  // The `@PrimaryGeneratedColumn()` decorator indicates that the `id` field is the primary key and its value will be auto-generated.

  @Column()
  company: string;
  // The `@Column()` decorator marks the `company` field as a database column.
  // `company` stores the name of the company associated with the job.

  @Column()
  title: string;
  // `title` stores the job title.
  // The `@Column()` decorator marks the `title` field as a database column.

  @Column('longtext')
  description: string;
  // The `@Column('longtext')` decorator defines `description` as a long text type column in the database.
  // `description` stores the job description with potentially large text.

  @Column('longtext')
  @IsNotEmpty()
  requirement: string;
  // The `@Column('longtext')` decorator defines `requirement` as a long text type column in the database.
  // `requirement` stores the job requirements.

  @Column({ default: '' })
  coverPage: string;
  // The `@Column({ default: '' })` decorator sets a default value for the `coverPage` column if none is provided.
  // `coverPage` stores the cover page image or file path.

  @Column({ nullable: true })
  @IsUrl()
  link: string;
  // The `@Column({ nullable: true })` decorator makes the `link` column optional, allowing null values.
  // The `@IsUrl()` decorator ensures that the `link` field contains a valid URL when provided.
  // `link` stores the URL to the job application or related resource.

  @ManyToOne(() => User, (user) => user.created, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  createdBy: User;
  // The `@ManyToOne()` decorator defines a many-to-one relationship between `Job` and `User`.
  // It indicates that many jobs can be associated with a single user, and the deletion of a user will cascade to delete related jobs.
  // The `@JoinColumn()` decorator specifies the foreign key column (`userId`) that links to the `id` column of the `User` entity.
  // `createdBy` establishes a foreign key relationship to the `User` entity, indicating which user created the job.
}
