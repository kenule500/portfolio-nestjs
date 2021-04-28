/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProjectsModule,
    ContactModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
