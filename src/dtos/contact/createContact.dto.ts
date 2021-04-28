/* eslint-disable prettier/prettier */
import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";


export class CreateContactDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsEmpty()
    website?: string;

    @IsPhoneNumber(null)
    @IsNotEmpty()
    phoneNumber: number;

    @IsString()
    @IsNotEmpty()
    message: string;
}