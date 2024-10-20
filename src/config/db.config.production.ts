import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';

export default (): PostgresConnectionOptions => ({
  // Don't put this here, Instead put in the env file
  url: process.env.DATABASE_URL,
  type: 'postgres',
  port: +process.env.PORT || 3000,
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],

  synchronize: false,
});
