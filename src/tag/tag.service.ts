import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTagDto: CreateTagDto) {
    const createdTag = this.prisma.tag.create({ data: createTagDto });

    return createdTag;
  }

  findAll() {
    const tags = this.prisma.tag.findMany();
    return tags;
  }

  findOne(id: number) {
    const tag = this.prisma.tag.findUnique({ where: { id } });
    return tag;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    const tagUpdated = this.prisma.tag.update({
      where: { id },
      data: updateTagDto,
    });
    return tagUpdated;
  }

  remove(id: number) {
    const tagDeleted = this.prisma.tag.delete({ where: { id } });
    return tagDeleted;
  }
}
