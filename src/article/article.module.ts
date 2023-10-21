import { Module } from '@nestjs/common';
import { ArticleService } from '@app/article/article.service';
import { ArticleController } from '@app/article/article.controller';
import { PrismaModule } from '@app/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
