require('dotenv').config();
export default function checkNodeProd() {
  process.env.NODE_ENV = 'prod';
  if (process.env.NODE_ENV === 'prod') {
    return true;
  } else {
    throw new Error('NODE_ENV is not prod');
  }
}
