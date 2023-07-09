import setup from './setup';
import db from './connection.js';

const runSetup = async () => {
  await setup();
  return await db.end();
};

runSetup();
