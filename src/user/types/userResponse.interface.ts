import { User } from '@prisma/client';
import { Omit } from '@prisma/client/runtime/library';

type AuthUser = Omit<User, 'password' | 'id'>;

export interface IUserResponse {
  user: AuthUser & { token: string };
}
