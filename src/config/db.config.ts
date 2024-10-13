import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://postgres:123@localhost:5432/nestjs-property-api?schema=public',
  type: 'postgres',
  port: 3306,
  entities: [],
  synchronize: true,
};
