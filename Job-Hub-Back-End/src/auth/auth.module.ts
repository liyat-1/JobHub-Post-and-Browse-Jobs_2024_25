/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule, // Importing the `UsersModule` to utilize user-related services.
    PassportModule, // Integrating the Passport.js module for authentication strategies.
    JwtModule.register({
      secret: jwtConstants.secret, // Registering the `JwtModule` with the secret key for signing JWTs.
      signOptions: { expiresIn: '3600s' }, // Setting the token expiration to 3600 seconds (1 hour).
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
