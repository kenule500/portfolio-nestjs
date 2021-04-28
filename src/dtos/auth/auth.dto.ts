/* eslint-disable prettier/prettier */
import { IsString, MinLength, MaxLength, Matches, IsEmail } from "class-validator";
 
 export class AuthDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password must conatin at lest one upper, number or special characters'})
    password: string;
 }