import {Pool} from 'pg';

//const ENV = 'development'; //|| 'production';

//const config = {path: 'stocks_test', max: 5};

//{path: 'stocks', max: 2}

const config_test = {
  user: 'postgres',
  database: 'stocks_test',
  password: 'password',
  port: 5432,
  host: 'localhost',
};
const config_prod = {
  user: 'postgres',
  database: 'stocks',
  password: 'password',
  port: 5432,
  host: 'localhost',
};
export default new Pool(config_test);
