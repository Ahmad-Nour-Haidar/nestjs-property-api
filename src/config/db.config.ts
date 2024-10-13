import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'node:path';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://postgres:123@localhost:5432/nestjs-property-api?schema=public',
  type: 'postgres',
  port: 5432,
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
