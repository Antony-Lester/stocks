import {Pool} from 'pg';

import * as dotenv from 'dotenv';
import * as process from 'process';
import * as path from 'path';
import getDotEnvPath from '../controllers/check/checkDotEnvPath';

dotenv.config({
  path: path.resolve(process.cwd(), getDotEnvPath(process.env.NODE_ENV)),
});

const config = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  port: parseInt(process.env.DB_PORT),
  host: process.env.DB_HOST,
};
export default new Pool(config);
