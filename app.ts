import express from 'express';
import bodyParser from 'body-parser';
import pool from './dbConnector';
import itemsRouter from './routes/itemsRouter';
import listRouter from './routes/listRouter';
const cors = require('cors');

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.dbSetup();
    this.routerSetup();
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private dbSetup(): void {
    pool.connect(function(err, client, done) {
      if (err) throw err;
      console.log('db setup done');
    });
  }

  private routerSetup() {
    this.app.use('/', listRouter);
    this.app.use('/items', itemsRouter);
  }
}
export default new App().app;
