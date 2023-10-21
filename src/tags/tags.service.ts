import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { Tag } from '@prisma/client';

@Injectable()
export class TagsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Tag[]> {
    return await this.prismaService.tag.findMany();
  }
}
