import pool from '../dbConnector';

export interface Item {
  id: number;
  name: string;
}

export class ItemsService {
  public static async get(): Promise<Array<Item>> {
    try {
      const client = await pool.connect();
      const { rows } = await client.query('SELECT * from itemsList');
      client.release();
      return rows;
    } catch (err) {
      return err;
    }
  }

  public static async create(name: string) {
    try {
      const client = await pool.connect();
      await client.query('INSERT into itemsList(name) values ($1)', [name]);
      client.release();
    } catch (err) {
      return err;
    }
  }

  public static async delete(id: Number) {
    try {
      const client = await pool.connect();
      await client.query('DELETE from itemsList WHERE id = $1', [id]);
      client.release();
    } catch (err) {
      return err;
    }
  }
}
