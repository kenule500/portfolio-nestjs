/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'starboy50',
  database: 'portfolio',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  // logging: true,
};
