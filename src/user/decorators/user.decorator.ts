import { IExpressRequest } from '@app/types/expressRequest.interface';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserInfo = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<IExpressRequest>();

    if (!request.user) {
      return null;
    }

    if (data) {
      return request.user[data];
    }

    return request.user;
  },
);
