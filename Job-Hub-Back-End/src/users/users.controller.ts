/* eslint-disable prettier/prettier */
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  // Retrieves all users from the database.
  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  // Retrieves a user by their username.
  @Get(':username')
  getUser(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  // Deletes a user by their ID, ensuring the user performing the action is authorized.
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  removeUser(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.userService.remove(id, req.user);
  }

  // Creates a new user with the provided details.
  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
