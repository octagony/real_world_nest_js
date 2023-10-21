import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagsModule } from '@app/tags/tags.module';
import { PrismaModule } from '@app/prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TagsModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
