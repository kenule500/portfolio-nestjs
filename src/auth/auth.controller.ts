import { AuthService } from './auth.service';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { AuthDto } from './../dtos/auth/auth.dto';
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() data: AuthDto): Promise<User> {
        return this.authService.createUser(data)
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    signin(@Body() data: AuthDto): Promise<string> {
        return this.authService.signin(data)
    }
}
