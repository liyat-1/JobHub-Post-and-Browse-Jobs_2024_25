/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
// The `LocalAuthGuard` class extends `AuthGuard` with the 'local' strategy.
// This guard handles the authentication process using the local strategy, typically involving username and password verification.
// If the credentials are valid, the request is allowed to proceed; otherwise, it is blocked.
