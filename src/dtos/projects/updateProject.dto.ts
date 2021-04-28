import { IsEmpty, IsString } from "class-validator";


export class UpdateProjectDto {
    
    @IsEmpty()
    @IsString()
    name?: string;

    @IsEmpty()
    @IsString()
    pictures?: string[];

    @IsEmpty()
    @IsString()
    details?: string;

    @IsEmpty()
    @IsString()
    client?: string;

    @IsEmpty()
    @IsString()
    link?: string;

    @IsEmpty()
    @IsString()
    frameworks?: string[];
}