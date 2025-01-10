/* eslint-disable prettier/prettier */
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/job.entity';
import { User } from './users/user.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql', // Specifies the database type, in this case, MySQL.
      host: '127.0.0.1', // The hostname or IP address of the database server, here it's the local machine.
      port: 3306, // The port number on which the database server is listening, 3306 is the default for MySQL.
      username: process.env.DATABASE_USER, // The username to connect to the database, fetched from environment variables for security.
      password: process.env.DATABASE_PASSWORD, // The password to connect to the database, also fetched from environment variables.
      database: 'jobhub', // The name of the database to connect to.
      entities: [User, Job], // The list of entities (models) that TypeORM should manage and synchronize with the database.
      synchronize: true, // Automatically synchronizes the database schema with the entities, creating or altering tables as needed. This should be used cautiously in production.
    }),
    // Importing user-related features and services.
    UsersModule,
    // Importing authentication-related features and services.
    AuthModule,
    // Importing job-related features and services.
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
