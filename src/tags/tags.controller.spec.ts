import { Test, TestingModule } from '@nestjs/testing';
import { TagsController } from '@app/tags/tags.controller';
import { TagsService } from '@app/tags/tags.service';

describe('TagsController', () => {
  let controller: TagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagsController],
      providers: [TagsService],
    }).compile();

    controller = module.get<TagsController>(TagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
