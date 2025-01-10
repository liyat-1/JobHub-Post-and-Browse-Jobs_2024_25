/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
// The `JwtAuthGuard` class extends `AuthGuard` with the 'jwt' strategy.
// This guard automatically handles the JWT authentication process by verifying the token in the request.
// If the token is valid, the request is allowed to proceed to the next handler; otherwise, it is blocked.
