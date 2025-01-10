/* eslint-disable prettier/prettier */

import * as dotenv from 'dotenv';
// Importing `dotenv` to load environment variables from a `.env` file into `process.env`.

dotenv.config();
// Calling `dotenv.config()` to load the environment variables defined in the `.env` file into `process.env`.

export const jwtConstants = {
  secret: process.env.JWT_SECRET ?? 'defaultKeyThatShouldBeChangedWithEnvVar',
  // Exporting an object `jwtConstants` with a `secret` property.
  // The `secret` is set to the value of the `JWT_SECRET` environment variable.
  // If `JWT_SECRET` is not defined, it defaults to a hardcoded string ('defaultKeyThatShouldBeChangedWithEnvVar').
};
