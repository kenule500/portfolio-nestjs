/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    pictures: string[];

    @IsNotEmpty()
    @IsString()
    details: string;

    @IsNotEmpty()
    @IsString()
    client: string;

    @IsNotEmpty()
    @IsString()
    link: string;

    @IsNotEmpty()
    frameworks: string[];
}