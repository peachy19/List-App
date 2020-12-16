import pool from '../dbConnector';
import Item from '../models/item';

export class ItemsService {
  public static async get(listId: string): Promise<Array<Item>> {
    try {
      const client = await pool.connect();
      const { rows } = await client.query(
        'SELECT * from items WHERE list_id = $1',
        [listId]
      );
      client.release();
      return rows;
    } catch (err) {
      throw err;
    }
  }

  public static async create(name: string, listId: string) {
    try {
      const client = await pool.connect();
      await client.query('INSERT into items(name, list_id) values ($1, $2)', [
        name,
        listId
      ]);
      client.release();
    } catch (err) {
      throw err;
    }
  }

  public static async delete(id: Number) {
    try {
      const client = await pool.connect();
      await client.query('DELETE from items WHERE id = $1', [id]);
      client.release();
    } catch (err) {
      throw err;
    }
  }
}
