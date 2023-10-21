import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '@app/prisma/prisma.module';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, AuthGuard],
  exports: [UserService],
})
export class UserModule {}
