import express from 'express';
import bodyParser from 'body-parser';
import pool from './dbConnector';
import ItemsRouter from './routes/itemsRouter';

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.dbSetup();
    this.routerSetup();
    // this.app.use('/items', ItemsRouter);
  }
  private config(): void {
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
    this.app.use('/items', ItemsRouter);
  }
}
export default new App().app;
