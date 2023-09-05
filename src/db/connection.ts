import {Pool} from 'pg';
import secrets from '../secrets';

const config = {
  user: secrets.DB_USER,
  database: secrets.DB_DATABASE,
  password: secrets.DB_PASSWORD,
  port: secrets.DB_PORT,
  host: secrets.DB_HOST,
};

export default new Pool(config);
