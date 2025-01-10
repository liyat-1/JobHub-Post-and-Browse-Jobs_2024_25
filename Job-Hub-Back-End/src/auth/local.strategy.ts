/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // The `LocalStrategy` class extends `PassportStrategy`, passing in the `passport-local` strategy.
  // This class is responsible for handling the local authentication process.
  constructor(private authService: AuthService) {
    super();
    // The constructor injects the `AuthService` to access the method for validating user credentials.
    // The `super()` call initializes the `PassportStrategy` with the default configuration for the `passport-local` strategy.
  }
  async validate(username: string, password: string): Promise<any> {
    // The `validate` method is called by the Passport library during the authentication process.
    // It takes `username` and `password` as parameters.
    const user = await this.authService.validateUser(username, password);
    // The method uses `AuthService` to validate the user's credentials.
    // If the user is found and the password is correct, it returns the user object without the password.
    if (!user) {
      throw new UnauthorizedException();
      // If the user is not found or the password is incorrect, it throws an `UnauthorizedException`.
      // This exception is automatically handled by NestJS to return a 401 status code.
    }
    return user;
    // If the credentials are valid, the user object is returned, allowing the request to proceed.
  }
}
