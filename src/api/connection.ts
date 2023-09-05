import Alpaca from '@alpacahq/alpaca-trade-api';

import * as dotenv from 'dotenv';
import * as process from 'process';
import * as path from 'path';
import getDotEnvPath from '../controllers/check/checkDotEnvPath';

dotenv.config({
  path: path.resolve(
    process.cwd(),
    getDotEnvPath(process.env.NODE_ENV?.toUpperCase())
  ),
});

export default new Alpaca({
  keyId: process.env.API_KEY,
  secretKey: process.env.API_SECRET,
  paper: true,
});
