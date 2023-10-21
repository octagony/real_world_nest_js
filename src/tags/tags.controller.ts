import { Controller, Get } from '@nestjs/common';
import { TagsService } from '@app/tags/tags.service';
import { Tag } from '@prisma/client';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async findAll(): Promise<Tag[]> {
    return await this.tagsService.findAll();
  }
}
