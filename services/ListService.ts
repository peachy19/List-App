import { v4 as uuidv4 } from 'uuid';
import pool from '../dbConnector';
import Item from '../models/item';

export interface List {
  id: string;
  items: Array<Item>;
}

export class ListService {
  public static async getListById(id: string): Promise<Array<Item>> {
    try {
      const client = await pool.connect();
      const { rows } = await client.query(
        'SELECT * from items WHERE list_id = $1',
        [id]
      );
      client.release();
      return rows;
    } catch (err) {
      throw err;
    }
  }

  public static async create(name: string) {
    try {
      const id = uuidv4();
      const client = await pool.connect();
      await client.query('INSERT into list(id, name) values ($1, $2)', [
        id,
        name
      ]);
      client.release();
    } catch (err) {
      throw err;
    }
  }

  public static async reset(id: string) {
    try {
      const client = await pool.connect();
      await client.query('DELETE from items WHERE list_id = $1', [id]);
      client.release();
    } catch (err) {
      throw err;
    }
  }
}
