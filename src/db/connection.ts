import {Pool} from 'pg';

//const ENV = 'development'; //|| 'production';

//const config = {path: 'stocks_test', max: 5};

//{path: 'stocks', max: 2}

const config = {
  user: 'postgres',
  database: 'stocks_test',
  password: 'password',
  port: 5432,
  host: 'localhost',
};
export default new Pool(config);
