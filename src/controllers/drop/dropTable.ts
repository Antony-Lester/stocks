import db from '../../db/connection';

export default async function dropTable(table: string) {
  return await db
    .query(`DROP TABLE IF EXISTS ${table};`)
    .catch(e => console.warn(e));
}
