require('dotenv').config();
export default function checkNodeTest() {
  process.env.NODE_ENV = 'test';
  if (process.env.NODE_ENV === 'test') {
    return true;
  } else {
    throw new Error('NODE_ENV is not test');
  }
}
