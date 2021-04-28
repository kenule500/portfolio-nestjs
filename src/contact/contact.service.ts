/* eslint-disable @typescript-eslint/no-empty-function */
import { NotImplementedException } from '@nestjs/common';
import { CreateContactDto } from 'src/dtos/contact/createContact.dto';
import { Contact } from 'src/entities/contact.entity';

export class ContactService {
  constructor() {}

  async getContacts(): Promise<Contact[]> {
    try {
      return await Contact.find();
    } catch (error) {
      throw new NotImplementedException('Your request was not successful');
    }
  }

  async getContact(id: string): Promise<Contact> {
    try {
      return await Contact.findOne(id);
    } catch (error) {
      throw new NotImplementedException('Your request was not successful');
    }
  }

  async createContact(data: CreateContactDto): Promise<Contact> {
    try {
      return await Contact.create(data).save();
    } catch (error) {
      throw new NotImplementedException('Your message was not sent');
    }
  }
}
