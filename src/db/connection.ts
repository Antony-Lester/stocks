import {Pool} from 'pg';

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
