import { Module } from '@nestjs/common';
import { TagsService } from '@app/tags/tags.service';
import { TagsController } from '@app/tags/tags.controller';
import { PrismaModule } from '@app/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
