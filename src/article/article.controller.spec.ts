import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from '@app/article/article.controller';
import { ArticleService } from '@app/article/article.service';

describe('ArticleController', () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [ArticleService],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
