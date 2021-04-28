/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateContactDto } from 'src/dtos/contact/createContact.dto';
import { Contact } from 'src/entities/contact.entity';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createContact(@Body() data: CreateContactDto): Promise<Contact> {
        return this.contactService.createContact(data);
    }
}
