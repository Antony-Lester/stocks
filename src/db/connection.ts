import {Pool} from 'pg';

//const ENV = 'development'; //|| 'production';

const config = {path: 'stocks_test', max: 1};

//{path: 'stocks', max: 2}

export default new Pool(config);
