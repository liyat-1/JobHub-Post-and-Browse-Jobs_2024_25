/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // Injecting `UsersService` to access user data and operations.
    private jwtService: JwtService, // Injecting `JwtService` to handle JWT creation and verification.
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // `validateUser` is an asynchronous method to validate a user's credentials.
    const user = await this.usersService.findOne(username, false);
    // Fetching the user from the database using `UsersService` based on the provided username.

    if (user && (await bcrypt.compare(pass, user.password))) {
      // If the user exists and the provided password matches the hashed password in the database.
      const { password, ...result } = user;
      // Removing the password from the user object before returning it to avoid exposing it.
      return result; // Returning the user details without the password.
    }
    return null; // Returning `null` if the user is not found or the password doesn't match.
  }

  async login(user: any) {
    // `login` is an asynchronous method to handle the login process and generate a JWT token.
    const payload = { username: user.username, sub: user.id };
    // Creating a payload with the username and user ID to be encoded in the JWT.
    return {
      access_token: this.jwtService.sign(payload),
      // Signing the payload with the secret key to generate a JWT token and returning it as `access_token`.
    };
  }
}
