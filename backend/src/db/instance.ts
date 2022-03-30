import mysql from 'mysql2';
import config from '../../config';
import Placemark from './models/Placemark';

const {
  db: {
    host, user, password, database, port,
  },
} = config;

type DBInstance = DB | null;

class DB {
  private static instance: DBInstance = null;

  private static connection: mysql.Connection;

  public Placemark: Placemark;

  constructor() {
    if (DB.instance) {
      throw new Error('Error: Instantiation failed: Use DB.getInstance() instead of new.');
    }

    DB.instance = this;
    // @ts-ignore
    DB.connection = mysql.createConnection({
      port,
      host,
      user,
      password,
      database,
    }).promise();
    this.Placemark = new Placemark(DB.connection);
  }
}

export default new DB();
