/* eslint-disable prettier/prettier */
import { jwtConstants } from './constants';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // `JwtStrategy` extends `PassportStrategy`, using the `Strategy` from `passport-jwt`.
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Configures the strategy to extract the JWT from the Authorization header as a Bearer token.
      ignoreExpiration: true,
      // Configures the strategy to ignore the expiration of the token, allowing the token to be accepted even if it is expired.
      secretOrKey: jwtConstants.secret,
      // The secret key used to validate the JWT. It is taken from `jwtConstants`.
    });
  }

  async validate(payload: any) {
    // The `validate` method is called automatically to validate the JWT's payload.
    // The `payload` contains the decoded JWT content.
    return { userId: payload.sub, username: payload.username };
    // Returns an object with `userId` and `username` extracted from the JWT payload.
    // This returned object is then attached to the request object, making it accessible in route handlers.
  }
}
