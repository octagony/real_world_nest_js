import { User } from '@prisma/client';
import { Request } from 'express';

export interface IExpressRequest extends Request {
  user?: User;
}
