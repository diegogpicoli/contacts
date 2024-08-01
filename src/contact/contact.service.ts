import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}
  create(createContactDto: CreateContactDto) {
    const createdContact = this.prisma.contact.create({
      data: createContactDto,
    });
    return createdContact;
  }

  findAll() {
    const contacts = this.prisma.contact.findMany();
    return contacts;
  }

  findOne(id: number) {
    const contact = this.prisma.contact.findUnique({ where: { id } });
    return contact;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    const contactUpdated = this.prisma.contact.update({
      where: { id },
      data: updateContactDto,
    });
    return contactUpdated;
  }

  remove(id: number) {
    const contactDeleted = this.prisma.contact.delete({ where: { id } });
    return contactDeleted;
  }
}
