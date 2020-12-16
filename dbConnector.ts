import { Pool } from 'pg';

export default new Pool({
  max: 20,
  connectionString: 'postgres://@localhost/prachi'
});
