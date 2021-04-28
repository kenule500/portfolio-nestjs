/* eslint-disable prettier/prettier */
import { ConflictException, NotImplementedException, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './../dtos/auth/auth.dto';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    async createUser(data: AuthDto): Promise<User> {
        const {email, password} = data;
        try {
              const user = new User();
              user.email = email;
              user.salt = await bcrypt.genSalt();
              user.password = await this.hashPassword(password, user.salt);
              return await user.save();

        } catch (error) {
            if (error.code == 23505) {
                throw new ConflictException('User already exist')
            } else  throw new NotImplementedException('user not created');
        }
    }
    async signin(data: AuthDto): Promise<string> {
        const {email, password} = data;
        const user = await User.findOne({email});

        if (user && await user.validatUserPassword(password)) {
            return 'Authenticated'
        } else throw new UnauthorizedException('invalid credentials')
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return  bcrypt.hash(password, salt);
    }
}
